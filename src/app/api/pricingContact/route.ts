import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { verifyRecaptcha, isValidRecaptchaScore } from '@/lib/recaptcha/verifyRecaptcha';
import { BOOKING_URL } from "@/lib/booking";

// Types for pricing form data
interface PricingFormData {
  fullName: string;
  businessEmail: string;
  businessPhone: string;
  companyName: string;
  message: string;
  packageName: string;
  packagePrice: string;
  recaptchaToken?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: PricingFormData = await request.json();

    // Validate required fields
    const { fullName, businessEmail, businessPhone, companyName, message, packageName, packagePrice, recaptchaToken } = body;

    if (!fullName || !businessEmail || !businessPhone || !message || !packageName) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
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

    // Verify reCAPTCHA
    if (recaptchaToken) {
      try {
        const recaptchaResult = await verifyRecaptcha(recaptchaToken);

        if (!recaptchaResult.success) {
          console.error('reCAPTCHA verification failed:', recaptchaResult['error-codes']);
          return NextResponse.json(
            { error: 'reCAPTCHA verification failed' },
            { status: 400 }
          );
        }

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
        // Continue without reCAPTCHA if verification service fails
      }
    }

    // Run all operations in parallel
    const operations = [
      storeInGoogleSheets(body),
      sendAdminNotification(body),
      sendClientThankYou(body)
    ];

    const results = await Promise.allSettled(operations);

    // Log any failures
    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        const operationNames = ['Google Sheets', 'Admin notification', 'Client thank-you'];
        console.error(`${operationNames[index]} error:`, result.reason);
      }
    });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (_error) {
    console.error("Pricing form API error:", _error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function storeInGoogleSheets(data: PricingFormData) {
  try {
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

    if (!GOOGLE_PRIVATE_KEY || !GOOGLE_CLIENT_EMAIL || !GOOGLE_SHEET_ID) {
      console.log('Google Sheets credentials not configured');
      return;
    }

    const auth = new google.auth.JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const rowData = [
      timestamp,
      data.fullName,
      data.businessEmail,
      data.businessPhone,
      data.companyName || 'N/A',
      '', // How Did You Hear — empty for pricing form
      data.message,
      `Pricing Page - ${data.packageName} (${data.packagePrice})`,
      data.companyName || ''
    ];

    // Check if sheet has headers
    const headerRange = 'A1:I1';
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: headerRange,
    });

    if (!headerResponse.data.values || headerResponse.data.values.length === 0) {
      const headers = ['Timestamp', 'Full Name', 'Business Email', 'Business Phone', 'Company Name/Stage', 'How Did You Hear', 'Message', 'Source', 'Company Name'];
      await sheets.spreadsheets.values.update({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: headerRange,
        valueInputOption: 'RAW',
        requestBody: {
          values: [headers],
        },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'A:I',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('Pricing form data stored in Google Sheets successfully');
  } catch (_error) {
    console.error("Google Sheets storage failed:", _error);
    throw _error;
  }
}

async function sendAdminNotification(data: PricingFormData) {
  try {
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const FROM_EMAIL = process.env.FROM_EMAIL || SMTP_USER;
    const PROFESSIONAL_EMAIL_TO = process.env.PROFESSIONAL_EMAIL_TO || process.env.PROFESSIONAL_EMAIL || process.env.ADMIN_EMAILS;
    const PROFESSIONAL_EMAIL_CC = process.env.PROFESSIONAL_EMAIL_CC;
    const PROFESSIONAL_EMAIL_BCC = process.env.PROFESSIONAL_EMAIL_BCC;

    if (!SMTP_USER || !SMTP_PASS) {
      console.log('Email configuration missing for admin notification');
      return;
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    } as nodemailer.TransportOptions);

    // Always include contact@testriq.com + any configured admin emails
    const adminEmails = new Set<string>(['contact@testriq.com']);
    if (PROFESSIONAL_EMAIL_TO) {
      PROFESSIONAL_EMAIL_TO.split(',').map(e => e.trim()).forEach(e => adminEmails.add(e));
    }

    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Testriq Pricing Inquiry" <${FROM_EMAIL}>`,
      to: Array.from(adminEmails).join(', '),
      subject: `New Pricing Inquiry - ${data.packageName} - from ${data.fullName}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #ffffff;">
          
          <!-- Header -->
          <div style="text-align: center; padding: 32px 24px 20px; background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); border-radius: 12px 12px 0 0;">
            <img src="https://www.testriq.com/images/testriq-logo.jpg" alt="Testriq QA Lab" style="height: 40px; margin-bottom: 16px;" />
            <h1 style="margin: 0; font-size: 22px; color: #ffffff; font-weight: 700;">New Pricing Package Inquiry</h1>
            <p style="margin: 8px 0 0; color: #bfdbfe; font-size: 14px;">Received from the Pricing Page</p>
          </div>

          <!-- Package Info Banner -->
          <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); padding: 24px; border-left: 4px solid #2563eb; margin: 24px;">
            <p style="margin: 0 0 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7280;">Selected Package</p>
            <h2 style="margin: 0 0 6px; font-size: 24px; font-weight: 800; color: #1e3a5f;">${data.packageName}</h2>
            <p style="margin: 0; font-size: 16px; font-weight: 600; color: #2563eb;">${data.packagePrice}</p>
          </div>

          <!-- Contact Details -->
          <div style="padding: 0 24px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1e3a5f; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px; margin-bottom: 16px;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; font-weight: 600; width: 140px; vertical-align: top;">Full Name</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px; font-weight: 500;">${data.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; font-weight: 600; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px;"><a href="mailto:${data.businessEmail}" style="color: #2563eb; text-decoration: none;">${data.businessEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; font-weight: 600; vertical-align: top;">Phone</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px;"><a href="tel:${data.businessPhone}" style="color: #2563eb; text-decoration: none;">${data.businessPhone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; font-weight: 600; vertical-align: top;">Company</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px;">${data.companyName || 'N/A'}</td>
              </tr>
            </table>
          </div>

          <!-- Message -->
          <div style="margin: 24px; background: #fefce8; padding: 20px; border-radius: 10px; border-left: 4px solid #eab308;">
            <h3 style="margin: 0 0 8px; font-size: 13px; font-weight: 700; color: #854d0e; text-transform: uppercase; letter-spacing: 0.5px;">Message</h3>
            <p style="margin: 0; font-size: 14px; color: #422006; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>

          <!-- Timestamp -->
          <div style="margin: 0 24px 24px; background: #f0f9ff; padding: 14px 20px; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-size: 13px; color: #0369a1;">
              <strong>Submitted:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>

          <!-- Footer -->
          <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 12px 12px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">Testriq QA Lab - Pricing Page Inquiry</p>
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

    await transporter.sendMail(mailOptions);
    console.log('Admin notification sent successfully for pricing inquiry');

  } catch (_error) {
    console.error("Admin notification failed:", _error);
    throw _error;
  }
}

async function sendClientThankYou(data: PricingFormData) {
  try {
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_USER || !SMTP_PASS) {
      console.log('Email configuration missing for client thank-you');
      return;
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    } as nodemailer.TransportOptions);

    const mailOptions = {
      from: `"Testriq QA Lab" <${SMTP_USER}>`,
      to: data.businessEmail,
      subject: `Thank You for Choosing ${data.packageName} - Testriq QA Lab`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #ffffff;">
          
          <!-- Header -->
          <div style="text-align: center; padding: 40px 24px 28px; background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%); border-radius: 12px 12px 0 0;">
            <img src="https://www.testriq.com/images/testriq-logo.jpg" alt="Testriq QA Lab" style="height: 45px; margin-bottom: 20px;" />
            <h1 style="margin: 0; font-size: 26px; color: #ffffff; font-weight: 800; letter-spacing: -0.5px;">Thank You, ${data.fullName}!</h1>
            <p style="margin: 12px 0 0; color: #bfdbfe; font-size: 15px; line-height: 1.5;">We've received your inquiry and our team is already on it.</p>
          </div>

          <!-- Body Content -->
          <div style="padding: 32px 24px;">
            
            <!-- Greeting -->
            <p style="font-size: 15px; color: #374151; line-height: 1.7; margin: 0 0 24px;">
              Dear <strong>${data.fullName}</strong>,<br><br>
              Thank you for your interest in our <strong>${data.packageName}</strong>. We appreciate you taking the time to reach out to us. Your inquiry is important to us, and we want to make sure we provide you with the best possible solution.
            </p>

            <!-- Selected Package Card -->
            <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border: 1px solid #bfdbfe; border-radius: 12px; padding: 24px; margin: 0 0 28px; text-align: center;">
              <p style="margin: 0 0 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #6b7280;">Your Selected Package</p>
              <h2 style="margin: 0 0 8px; font-size: 22px; font-weight: 800; color: #1e3a5f;">${data.packageName}</h2>
              <p style="margin: 0; font-size: 18px; font-weight: 700; color: #2563eb;">${data.packagePrice}</p>
            </div>

            <!-- Your Details Summary -->
            <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 10px; padding: 20px; margin: 0 0 28px;">
              <h3 style="margin: 0 0 14px; font-size: 13px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.5px;">Your Submission Summary</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 13px; font-weight: 600; width: 130px;">Name</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 14px;">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Email</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 14px;">${data.businessEmail}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Phone</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 14px;">${data.businessPhone}</td>
                </tr>
                ${data.companyName ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Company</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 14px;">${data.companyName}</td>
                </tr>
                ` : ''}
              </table>
            </div>

            <!-- What Happens Next -->
            <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 10px; padding: 24px; margin: 0 0 28px;">
              <h3 style="margin: 0 0 14px; font-size: 15px; font-weight: 700; color: #065f46;">What Happens Next?</h3>
              <ol style="margin: 0; padding-left: 18px; color: #047857; font-size: 14px; line-height: 2;">
                <li>Our QA expert will review your requirements</li>
                <li>You'll receive a personalized proposal <strong>within 2 hours</strong></li>
                <li>We'll schedule a brief discovery call at your convenience</li>
                <li>Testing begins as soon as you give the green light!</li>
              </ol>
            </div>

            <!-- Contact Options -->
            <div style="margin: 0 0 28px;">
              <h3 style="font-size: 15px; color: #1e3a5f; font-weight: 700; margin: 0 0 12px;">Need Immediate Assistance?</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0;">
                    <a href="tel:+919152929343" style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: 600;">(+91) 915-2929-343</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <a href="mailto:contact@testriq.com" style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: 600;">contact@testriq.com</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <a href="${BOOKING_URL}" style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: 600;">Schedule a Meeting</a>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Closing -->
            <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0 0 8px;">
              We look forward to helping you achieve quality excellence with our world-class testing services.
            </p>
            
            <div style="text-align: center; margin: 32px 0 0; padding-top: 24px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 16px; color: #2563eb; font-weight: 700;">Warm Regards,</p>
              <p style="margin: 4px 0 0; font-size: 16px; color: #1e3a5f; font-weight: 700;">The Testriq QA Lab Team</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 12px 12px; text-align: center; border-top: 1px solid #e5e7eb;">
            <img src="https://www.testriq.com/images/testriq-logo.jpg" alt="Testriq" style="height: 30px; margin-bottom: 12px;" />
            <p style="margin: 0 0 4px; font-size: 12px; color: #9ca3af;">Testriq QA Lab LLP - Global Software Testing Services</p>
            <p style="margin: 0; font-size: 11px; color: #d1d5db;">
              <a href="https://www.testriq.com" style="color: #9ca3af; text-decoration: none;">www.testriq.com</a> · 
              <a href="https://www.linkedin.com/company/testriq-qa-lab" style="color: #9ca3af; text-decoration: none;">LinkedIn</a>
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Client thank-you sent successfully to:', data.businessEmail);

  } catch (_error) {
    console.error('Client thank-you email failed:', _error);
    throw _error;
  }
}
