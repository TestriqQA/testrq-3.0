import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { verifyRecaptcha, isValidRecaptchaScore } from '@/lib/recaptcha/verifyRecaptcha';
import { readLeadAttribution, leadAttributionEmailRows } from '@/lib/lead-attribution';

interface IoTContactFormData {
  fullName: string;
  businessEmail: string;
  businessPhone: string;
  companyName: string;
  iotSolutionType: string;
  testingRequirements: string;
  projectDetails: string;
  source?: string;
  recaptchaToken?: string;
  // DEV-02 — attached to every submission by useRecaptchaForm. Read via
  // readLeadAttribution() rather than used directly, so the values are
  // type-checked and length-capped before reaching an email or a sheet.
  landingPage?: string;
  landingReferrer?: string;
  submittedFrom?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: IoTContactFormData = await request.json();
    const { fullName, businessEmail, businessPhone, companyName, iotSolutionType, testingRequirements, projectDetails } = body;
    
    if (!fullName || !businessEmail || !businessPhone || !companyName || !iotSolutionType || !testingRequirements || !projectDetails) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Verify reCAPTCHA
    const { recaptchaToken } = body;
    if (!recaptchaToken) {
      return NextResponse.json({ error: 'reCAPTCHA verification required' }, { status: 400 });
    }

    const recaptchaResult = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaResult.success || !isValidRecaptchaScore(recaptchaResult.score, 0.5)) {
      return NextResponse.json({ error: 'Suspicious activity detected' }, { status: 400 });
    }

    if (!body.source) {
      body.source = 'IoT Appliance Testing Services Page';
    }
    
    const formattedData: IoTContactFormData = { ...body, source: body.source || 'IoT Appliance Testing Services Page' };
    
    const operations = [
      storeInGoogleSheets(formattedData),
      sendProfessionalNotification(formattedData),
      sendClientConfirmation(formattedData)
    ];
    
    await Promise.allSettled(operations);
    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function storeInGoogleSheets(data: IoTContactFormData) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.SPREADSHEET_ID;
  const sheetName = 'Form Submissions';

  const values = [[
    new Date().toLocaleString(),
    data.fullName,
    data.businessEmail,
    data.businessPhone,
    data.companyName,
    data.iotSolutionType,
    data.testingRequirements,
    data.projectDetails,
    data.source || 'IoT Appliance Testing Services Page'
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:I`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values },
  });
}

async function sendProfessionalNotification(data: IoTContactFormData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: process.env.SMTP_USER,
    subject: `New IoT Contact Form Submission from ${data.fullName}`,
    html: `<h2>New IoT Contact Form Submission</h2>
           <p><strong>Name:</strong> ${data.fullName}</p>
           <p><strong>Email:</strong> ${data.businessEmail}</p>
           <p><strong>Phone:</strong> ${data.businessPhone}</p>
           <p><strong>Company:</strong> ${data.companyName}</p>
           <p><strong>IoT Solution Type:</strong> ${data.iotSolutionType}</p>
           <p><strong>Testing Requirements:</strong> ${data.testingRequirements}</p>
           <p><strong>Project Details:</strong> ${data.projectDetails}</p>
           <p><strong>Source:</strong> ${data.source}</p>
           ${leadAttributionEmailRows(readLeadAttribution(data))}`
  });
}

async function sendClientConfirmation(data: IoTContactFormData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: data.businessEmail,
    subject: 'Thank you for contacting Testriq QA Lab - IoT Testing',
    html: `<p>Dear ${data.fullName},</p>
           <p>Thank you for your inquiry. We'll get back to you within 24 hours.</p>
           <p>Best regards,<br>Testriq QA Lab Team</p>`
  });
}