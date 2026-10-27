import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { verifyRecaptcha, isValidRecaptchaScore } from '@/lib/recaptcha/verifyRecaptcha';
import { toEmailSafeText } from '@/lib/email-safe-text'; // Added

// Types for form data
interface ContactFormData {
  fullName: string;
  businessEmail: string;
  businessPhone: string;
  companyStage?: string; // Made optional
  howDidYouHear?: string; // Made optional
  message: string;
  companyName?: string; // Optional field for E-commerce form
  platform?: string; // Optional field for E-commerce form
  source?: string; // Hidden field for source tracking
  recaptchaToken?: string; // Added
}

// Helper function to format company stage
function formatCompanyStage(stage: string | undefined): string {
  if (!stage) return ''; // Return empty string if undefined
  const stageMap: { [key: string]: string } = {
    'startup': 'Startup',
    'early_stage_startup': 'Early stage startup',
    'mid_stage_startup': 'Mid stage startup',
    'late_stage_startup': 'Late stage startup',
    'enterprise': 'Enterprise',
    'small_business': 'Small business',
    'medium_business': 'Medium business',
    'large_business': 'Large business',
    'government': 'Government',
    'non_profit': 'Non-profit',
    'other': 'Other'
  };

  return stageMap[stage] || stage;
}

// Helper function to format how did you hear
function formatHowDidYouHear(source: string | undefined): string {
  if (!source) return ''; // Return empty string if undefined
  const sourceMap: { [key: string]: string } = {
    'google_search': 'Google search',
    'social_media': 'Social media',
    'referral': 'Referral',
    'linkedin': 'LinkedIn',
    'facebook': 'Facebook',
    'twitter': 'Twitter',
    'instagram': 'Instagram',
    'word_of_mouth': 'Word of mouth',
    'conference': 'Conference',
    'blog': 'Blog',
    'advertisement': 'Advertisement',
    'other': 'Other'
  };

  return sourceMap[source] || source;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { fullName, businessEmail, businessPhone, message, recaptchaToken } = body; // Modified

    if (!fullName || !businessEmail || !businessPhone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA (REQUIRED)
    if (!recaptchaToken) {
      console.error('reCAPTCHA token missing');
      return NextResponse.json(
        { error: 'reCAPTCHA verification required' },
        { status: 400 }
      );
    }

    try {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);

      if (!recaptchaResult.success) {
        console.error('reCAPTCHA verification failed:', recaptchaResult['error-codes']);
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }

      // Check if the score is acceptable (you can adjust the threshold as needed)
      if (!isValidRecaptchaScore(recaptchaResult.score, 0.5)) {
        console.warn(`Low reCAPTCHA score: ${recaptchaResult.score}`);
        return NextResponse.json(
          { error: 'Suspicious activity detected. Please try again.' },
          { status: 400 }
        );
      }

      console.log(`reCAPTCHA verification successful. Score: ${recaptchaResult.score}`);
    } catch (error) {
      console.error('Error verifying reCAPTCHA:', error);
      return NextResponse.json(
        { error: 'reCAPTCHA verification error' },
        { status: 500 }
      );
    }

    // Add source field if not provided
    if (!body.source) {
      body.source = 'Website Contact Us Page';
    }

    const isEcommerce = (body.source || '').toLowerCase().includes('e-commerce testing services page');

    // Ensure companyName and platform are correctly captured, defaulting to N/A if not provided
    const effectiveCompanyName = body.companyName || 'N/A';
    const effectivePlatform = body.platform || 'N/A';

    // Format the data for better readability
    const formattedData: ContactFormData = {
      ...body,
      companyName: effectiveCompanyName,
      platform: effectivePlatform,
      companyStage: isEcommerce ? effectivePlatform : formatCompanyStage(body.companyStage),
      howDidYouHear: isEcommerce ? '' : formatHowDidYouHear(body.howDidYouHear),
      source: body.source || 'Website Contact Us Page',
    };

    // Run all operations in parallel for better performance
    const operations = [
      storeInGoogleSheets(formattedData),
      sendProfessionalNotification(formattedData),
      sendClientConfirmation(formattedData)
    ];

    // Execute all operations concurrently
    const results = await Promise.allSettled(operations);

    // Log any failures but don't fail the entire request
    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        const operationNames = ['Google Sheets', 'Professional notification', 'Client confirmation'];
        console.error(`${operationNames[index]} error:`, result.reason);
      }
    });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (_error) {
    console.error("API error:", _error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function storeInGoogleSheets(data: ContactFormData) {
  try {
    // Google Sheets configuration
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

    if (!GOOGLE_PRIVATE_KEY || !GOOGLE_CLIENT_EMAIL || !GOOGLE_SHEET_ID) {
      console.log('Google Sheets credentials not configured');
      return;
    }

    // Create JWT auth client
    const auth = new google.auth.JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Initialize Google Sheets API
    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare row data with source field
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const isEcommerce = (data.source || '').toLowerCase().includes('e-commerce testing services page');

    const rowData = [
      timestamp,
      data.fullName,
      data.businessEmail,
      data.businessPhone,
      isEcommerce ? data.platform : data.companyStage || '',
      isEcommerce ? '' : data.howDidYouHear || '',
      data.message,
      data.source || 'Website Contact Us Page',
      data.companyName || ''
    ];

    // Check if sheet has headers, if not add them
    const headerRange = 'A1:I1';
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: headerRange,
    });

    if (!headerResponse.data.values || headerResponse.data.values.length === 0) {
      // Add headers if sheet is empty
      const headers = ['Timestamp', 'Full Name', 'Business Email', 'Business Phone', 'Company Stage/Platform', 'How Did You Hear', 'Message', 'Source', 'Company Name'];
      await sheets.spreadsheets.values.update({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: headerRange,
        valueInputOption: 'RAW',
        requestBody: {
          values: [headers],
        },
      });
    }

    // Append the new row
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'A:I',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('Data stored in Google Sheets successfully');
  } catch (_error) {
    console.error("Google Sheets storage failed:", _error);
    throw _error;
  }
}

async function sendProfessionalNotification(data: ContactFormData) {
  try {
    // Email configuration from environment variables
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const FROM_EMAIL = process.env.FROM_EMAIL;

    // Support multiple admin emails - comma separated
    const PROFESSIONAL_EMAIL_TO = process.env.PROFESSIONAL_EMAIL_TO || process.env.PROFESSIONAL_EMAIL || process.env.ADMIN_EMAILS;
    const PROFESSIONAL_EMAIL_CC = process.env.PROFESSIONAL_EMAIL_CC;
    const PROFESSIONAL_EMAIL_BCC = process.env.PROFESSIONAL_EMAIL_BCC;

    if (!SMTP_USER || !SMTP_PASS || !PROFESSIONAL_EMAIL_TO) {
      console.log('Email configuration missing for professional notification');
      return;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    } as nodemailer.TransportOptions);

    const isEcommerce = (data.source || '').toLowerCase().includes('e-commerce testing services page');

    const ecommerceFields = `
      <p><strong>Company Name:</strong> ${toEmailSafeText(data.companyName || 'N/A')}</p>
      <p><strong>Platform:</strong> ${toEmailSafeText(data.platform || 'N/A')}</p>
    `;

    const contactUsFields = `
      <p><strong>Company Stage:</strong> ${toEmailSafeText(data.companyStage || 'N/A')}</p>
      <p><strong>How Did You Hear:</strong> ${toEmailSafeText(data.howDidYouHear || 'N/A')}</p>
    `;

    // Email content
    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Testriq Contact Form" <${FROM_EMAIL}>`,
      to: PROFESSIONAL_EMAIL_TO.split(',').map(email => email.trim()).join(', '),
      subject: `New Contact Form Submission from ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background: #f3f4f6; color: white; border-radius: 8px 8px 0 0;">
            <img src="https://www.testriq.com/images/testriq-logo.jpg" alt="Testriq QA Lab" style="height: 40px; margin-bottom: 10px;" />
            <h2 style="margin: 0; font-size: 24px; color: #25a8e0;">New Contact Form Submission</h2>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Contact Details:</h3>
            <p><strong>Full Name:</strong> ${toEmailSafeText(data.fullName)}</p>
            <p><strong>Business Email:</strong> ${toEmailSafeText(data.businessEmail)}</p>
            <p><strong>Business Phone:</strong> ${toEmailSafeText(data.businessPhone)}</p>
            ${isEcommerce ? ecommerceFields : contactUsFields}
            <p><strong>Source:</strong> ${toEmailSafeText(data.source || 'Website Contact Us Page')}</p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${toEmailSafeText(data.message)}</p>
          </div>
          
          <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #0369a1;">
              <strong>Submitted at:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>

         <div style="background-color: #f3f4f6; padding: 25px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <div style="text-align: center; color: #6b7280; font-size: 14px; line-height: 1.5;">
              <img src="https://www.testriq.com/images/testriq-logo.jpg" alt="Testriq QA Lab" style="height: 35px; margin-bottom: 15px;" />
              <p style="margin: 0 0 5px 0;">This email was sent from the Testriq QA Lab contact form.</p>
              
            </div>
          </div>

        </div>
      `,
    };

    if (PROFESSIONAL_EMAIL_CC) {
      mailOptions.cc = PROFESSIONAL_EMAIL_CC.split(',').map(email => email.trim()).join(', ');
    }
    if (PROFESSIONAL_EMAIL_BCC) {
      mailOptions.bcc = PROFESSIONAL_EMAIL_BCC.split(',').map(email => email.trim()).join(', ');
    }

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Professional notification sent successfully to:', mailOptions.to);

  } catch (_error) {
    console.error("Professional notification failed:", _error);
    throw _error;
  }
}

async function sendClientConfirmation(data: ContactFormData) {
  try {
    // Email configuration from environment variables
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_USER || !SMTP_PASS) {
      console.log('Email configuration missing for client confirmation');
      return;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    } as nodemailer.TransportOptions);

    const isEcommerce = (data.source || '').toLowerCase().includes('e-commerce testing services page');

    const ecommerceFields = `
      <p style="margin: 0;"><strong>Company Name:</strong> ${toEmailSafeText(data.companyName || 'N/A')}</p>
      <p style="margin: 0;"><strong>Platform:</strong> ${toEmailSafeText(data.platform || 'N/A')}</p>
    `;

    const contactUsFields = `
      <p style="margin: 0;"><strong>Company Stage:</strong> ${toEmailSafeText(data.companyStage || 'N/A')}</p>
      <p style="margin: 0;"><strong>How You Heard About Us:</strong> ${toEmailSafeText(data.howDidYouHear || 'N/A')}</p>
    `;

    // Email content with logo
    const mailOptions = {
      from: `"Testriq QA Lab" <${SMTP_USER}>`,
      to: data.businessEmail,
      subject: 'Thank you for contacting Testriq QA Lab',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="text-align: center; padding: 20px; background: #f3f4f6; color: white; border-radius: 8px 8px 0 0;">
            <img src="https://www.testriq.com/images/testriq-logo.jpg" alt="Testriq QA Lab" style="height: 50px; margin-bottom: 15px;" />
            <p style="margin: 10px 0 0 0; font-size: 16px; color: #25a8e0; opacity: 0.9;">Quality Excellence Through Expert Testing</p>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #2563eb; margin-top: 0;">Dear ${toEmailSafeText(data.fullName)},</h2>
            
            <p style="line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out to Testriq QA Lab. We have received your inquiry and appreciate your interest in our software testing services.
            </p>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 25px 0;">
              <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 15px;">Your Submission Summary:</h3>
              <div style="display: grid; gap: 8px;">
                <p style="margin: 0;"><strong>Full Name:</strong> ${toEmailSafeText(data.fullName)}</p>
                <p style="margin: 0;"><strong>Business Email:</strong> ${toEmailSafeText(data.businessEmail)}</p>
                <p style="margin: 0;"><strong>Business Phone:</strong> ${toEmailSafeText(data.businessPhone)}</p>
                ${isEcommerce ? ecommerceFields : contactUsFields}
              </div>
            </div>
            
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h4 style="color: #92400e; margin-top: 0;">Your Message:</h4>
              <p style="margin: 0; white-space: pre-wrap;">"${toEmailSafeText(data.message)}"</p>
            </div>
            
            <div style="background-color: #dcfce7; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #166534; margin-top: 0;">What Happens Next?</h3>
              <p style="margin: 0; line-height: 1.6;">
                Our team will review your inquiry and get back to you <strong>within 2 hours</strong> during business hours (Monday-Friday, 9 AM - 6 PM IST ).
              </p>
            </div>
            
            <div style="margin: 30px 0;">
              <h3 style="color: #2563eb;">In the meantime, feel free to:</h3>
              <ul style="line-height: 1.8; padding-left: 20px;">
                <li>Visit our website: <a href="https://www.testriq.com" style="color: #2563eb;">https://www.testriq.com</a></li>
                <li>Follow us on LinkedIn: <a href="https://www.linkedin.com/company/testriq-qa-lab" style="color: #2563eb;">Testriq QA Lab</a></li>
                <li>Call us directly: <a href="tel:+919152929343" style="color: #2563eb;">(+91 ) 915-2929-343</a></li>
              </ul>
            </div>
            
            <p style="line-height: 1.6; margin-bottom: 30px;">
              We look forward to discussing how we can help you achieve quality excellence with our automation, manual, and performance testing services.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="margin: 0; font-size: 18px; color: #2563eb;">Thank you,</p>
              <p style="margin: 0; font-size: 18px; color: #2563eb;">The Testriq QA Lab Team</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Client confirmation sent successfully to:', mailOptions.to);

  } catch (_error) {
    console.error('Client confirmation failed:', _error);
    throw _error;
  }
}
