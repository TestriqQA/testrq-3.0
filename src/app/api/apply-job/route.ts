import { NextRequest, NextResponse } from 'next/server';
import { verifyRecaptcha, isValidRecaptchaScore } from '@/lib/recaptcha/verifyRecaptcha';
import nodemailer from 'nodemailer';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { google } from 'googleapis';
import { Readable } from 'stream';


export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const fullName = formData.get('fullName') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const currentCTC = formData.get('currentCTC') as string;
        const expectedCTC = formData.get('expectedCTC') as string;
        const skillsToolsFramework = formData.get('skillsToolsFramework') as string;
        const domainKnowledgeString = formData.get('domainKnowledge') as string;
        let domainKnowledge: string[] = [];
        if (domainKnowledgeString) {
            try {
                domainKnowledge = JSON.parse(domainKnowledgeString);
            } catch (e) {
                console.error("[apply-job API] Failed to parse domainKnowledge JSON:", e);
            }
        }
        const experience = formData.get('experience') as string;
        const location = formData.get('location') as string;
        const noticePeriod = formData.get('noticePeriod') as string;
        const jobTitle = formData.get('jobTitle') as string;
        const jobId = formData.get('jobId') as string;
        const resume = formData.get('resume') as File | null;
        const recaptchaToken = formData.get('recaptchaToken') as string;


        console.log('[apply-job API] Received submission for:', email);

        // Verify reCAPTCHA if secret key is configured (bypass for local dev without keys)
        if (process.env.RECAPTCHA_SECRET_KEY) {
            if (!recaptchaToken) {
                return NextResponse.json({ message: 'reCAPTCHA verification required' }, { status: 400 });
            }

            const recaptchaResult = await verifyRecaptcha(recaptchaToken);
            if (!recaptchaResult.success || !isValidRecaptchaScore(recaptchaResult.score, 0.5)) {
                console.warn('[apply-job API] reCAPTCHA verification failed:', recaptchaResult);
                return NextResponse.json({ message: 'Suspicious activity detected' }, { status: 400 });
            }
        } else {
            console.warn('[apply-job API] Bypassing reCAPTCHA verification because RECAPTCHA_SECRET_KEY is missing');
        }


        // Notice Period and Domain Knowledge are mandatory in the form, so they are
        // enforced here too — the client-side check is a UX affordance, not a
        // guarantee, and a direct POST would otherwise store an incomplete
        // application. Applicants with no domain experience send ["NA"].
        if (!fullName || !email || !jobTitle || !resume || !noticePeriod || domainKnowledge.length === 0) {
            console.warn('[apply-job API] Missing required fields:', {
                fullName: !!fullName,
                email: !!email,
                jobTitle: !!jobTitle,
                resume: !!resume,
                noticePeriod: !!noticePeriod,
                domainKnowledge: domainKnowledge.length > 0,
            });
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        let resumeBuffer: Buffer | undefined;
        if (resume) {
            const arrayBuffer = await resume.arrayBuffer();
            resumeBuffer = Buffer.from(arrayBuffer);
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // Gmail port 587 uses STARTTLS, secure should be false
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Modern Admin Email Template
        const adminEmailHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Job Application - ${jobTitle}</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f8fafc;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 8px;
            }
            .header p {
                opacity: 0.9;
                font-size: 16px;
            }
            .content {
                padding: 30px;
            }
            .job-info {
                background: #f1f5f9;
                border-radius: 8px;
                padding: 20px;
                margin-bottom: 25px;
                border-left: 4px solid #667eea;
            }
            .job-info h2 {
                color: #1e293b;
                font-size: 18px;
                margin-bottom: 8px;
            }
            .job-info p {
                color: #64748b;
                margin: 0;
                text-align: left;
            }
            .applicant-details {
                display: grid;
                gap: 15px;
            }
            .detail-row {
                display: flex;
                padding: 12px 0;
                border-bottom: 1px solid #e2e8f0;
            }
            .detail-row:last-child {
                border-bottom: none;
            }
            .detail-label {
                font-weight: 600;
                color: #374151;
                min-width: 140px;
                flex-shrink: 0;
            }
            .detail-value {
                color: #6b7280;
                flex: 1;
            }
            .skills-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                margin-top: 5px;
            }
            .skill-tag {
                background: #e0e7ff;
                color: #3730a3;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 500;
            }
            .footer {
                background: #f8fafc;
                padding: 20px 30px;
                text-align: center;
                border-top: 1px solid #e2e8f0;
            }
            .footer p {
                color: #64748b;
                font-size: 14px;
            }
            .cta-button {
                display: inline-block;
                background: #667eea;
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                margin-top: 15px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎯 New Job Application Received</h1>
                <p>A candidate has applied for a position at Testriq</p>
            </div>
            
            <div class="content">
                <div class="job-info">
                    <h2>${jobTitle}</h2>
                    <p>Application ID: #${jobId} • Received: ${new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })}</p>
                </div>
                
                <div class="applicant-details">
                    <div class="detail-row">
                        <div class="detail-label">👤 Full Name:</div>
                        <div class="detail-value">${fullName}</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">📧 Email:</div>
                        <div class="detail-value"><a href="mailto:${email}" style="color: #667eea;">${email}</a></div>
                    </div>
                    ${phone ? `
                    <div class="detail-row">
                        <div class="detail-label">📱 Phone:</div>
                        <div class="detail-value"><a href="tel:${phone}" style="color: #667eea;">${phone}</a></div>
                    </div>
                    ` : ''}
                    <div class="detail-row">
                        <div class="detail-label">📍 Location:</div>
                        <div class="detail-value">${location}</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">💼 Experience:</div>
                        <div class="detail-value">${experience}</div>
                    </div>
                    ${currentCTC ? `
                    <div class="detail-row">
                        <div class="detail-label">💰 Current CTC:</div>
                        <div class="detail-value">${currentCTC} LPA</div>
                    </div>
                    ` : ''}
                    ${expectedCTC ? `
                    <div class="detail-row">
                        <div class="detail-label">💸 Expected CTC:</div>
                        <div class="detail-value">${expectedCTC} LPA</div>
                    </div>
                    ` : ''}
                    ${noticePeriod ? `
                    <div class="detail-row">
                        <div class="detail-label">⏰ Notice Period:</div>
                        <div class="detail-value">${noticePeriod}</div>
                    </div>
                    ` : ''}
                    ${skillsToolsFramework ? `
                    <div class="detail-row">
                        <div class="detail-label">🛠️ Skills & Tools:</div>
                        <div class="detail-value">${skillsToolsFramework}</div>
                    </div>
                    ` : ''}
                    ${domainKnowledge.length > 0 ? `
                    <div class="detail-row">
                        <div class="detail-label">🎓 Domain Knowledge:</div>
                        <div class="detail-value">
                            <div class="skills-tags">
                                ${domainKnowledge.map(domain => `<span class="skill-tag">${domain}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
            
            <div class="footer">
                <p>📎 Resume attached to this email</p>
                <p>Please review the application and respond to the candidate promptly.</p>
            </div>
        </div>
    </body>
    </html>
    `;

        // Modern User Confirmation Email Template
        const userEmailHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Received - Testriq</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f8fafc;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
            }
            .header h1 {
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 10px;
            }
            .header p {
                opacity: 0.95;
                font-size: 16px;
            }
            .content {
                padding: 40px 30px;
            }
            .success-icon {
                text-align: center;
                margin-bottom: 25px;
            }
            .success-icon div {
                width: 80px;
                height: 80px;
                background: #dcfce7;
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 40px;
            }
            .message {
                text-align: center;
                margin-bottom: 30px;
            }
            .message h2 {
                color: #1f2937;
                font-size: 24px;
                margin-bottom: 15px;
            }
            .message p {
                color: #6b7280;
                font-size: 16px;
                line-height: 1.6;
            }
            .application-summary {
                background: #f9fafb;
                border-radius: 8px;
                padding: 25px;
                margin: 25px 0;
                border-left: 4px solid #10b981;
            }
            .application-summary h3 {
                color: #1f2937;
                font-size: 18px;
                margin-bottom: 15px;
            }
            .summary-item {
                display: flex;
                justify-content: space-between;
                padding: 8px 0;
                border-bottom: 1px solid #e5e7eb;
            }
            .summary-item:last-child {
                border-bottom: none;
            }
            .summary-label {
                font-weight: 600;
                color: #374151;
            }
            .summary-value {
                color: #6b7280;
            }
            .next-steps {
                background: #eff6ff;
                border-radius: 8px;
                padding: 25px;
                margin: 25px 0;
            }
            .next-steps h3 {
                color: #1e40af;
                font-size: 18px;
                margin-bottom: 15px;
            }
            .next-steps ul {
                color: #374151;
                padding-left: 20px;
            }
            .next-steps li {
                margin-bottom: 8px;
            }
            .footer {
                background: #f8fafc;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #e2e8f0;
            }
            .footer p {
                color: #64748b;
                font-size: 14px;
                margin-bottom: 15px;
            }
            .social-links {
                margin-top: 20px;
            }
            .social-links a {
                display: inline-block;
                margin: 0 10px;
                color: #6b7280;
                text-decoration: none;
                font-size: 14px;
            }
            .contact-info {
                background: #fef3c7;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                text-align: center;
            }
            .contact-info h4 {
                color: #92400e;
                margin-bottom: 10px;
            }
            .contact-info p {
                color: #a16207;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎉 Application Received!</h1>
                <p>Thank you for applying to Testriq. We've received your application for:</p>
            </div>
            
            <div class="content">
                <div class="success-icon">
                    <div style="color: #10b981;">✔</div>
                </div>
                
                <div class="message">
                    <h2>Hello ${fullName},</h2>
                    <p>We're excited that you're interested in joining our team. This email confirms that we've successfully received your application for the position of:</p>
                </div>

                <div class="application-summary">
                    <h3>Application Summary</h3>
                    <div class="summary-item">
                        <span class="summary-label">Position Applied For:</span>
                        <span class="summary-value">${jobTitle}</span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Application ID:</span>
                        <span class="summary-value">#${jobId}</span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Date Submitted:</span>
                        <span class="summary-value">${new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })}</span>
                    </div>
                </div>

                <div class="next-steps">
                    <h3>What Happens Next?</h3>
                    <ul>
                        <li>Our recruitment team will review your application carefully.</li>
                        <li>If your profile matches our requirements, we will contact you for the next steps in the hiring process.</li>
                        <li>You can expect to hear from us within 5-7 business days.</li>
                    </ul>
                </div>

                <div class="contact-info">
                    <h4>Questions?</h4>
                    <p>If you have any questions regarding your application, please do not hesitate to contact our HR department at <a href="mailto:hr@testriq.com" style="color: #a16207;">hr@testriq.com</a>.</p>
                </div>

                <div class="message">
                    <p>In the meantime, feel free to explore our website and learn more about our company culture and other career opportunities.</p>
                    <a href="https://www.testriq.com/careers" class="cta-button" style="background: #10b981;">Explore Careers at Testriq</a>
                </div>
            </div>
            
            <div class="footer">
                <p>This is an automated email, please do not reply directly to this message.</p>
                <p>&copy; ${new Date().getFullYear()} Testriq. All rights reserved.</p>
                <div class="social-links">
                    <a href="https://www.linkedin.com/company/testriq-qa-lab" target="_blank">LinkedIn</a> |
                    <a href="https://www.testriq.com" target="_blank">Website</a>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;

        const mailOptionsAdmin = {
            from: process.env.SMTP_USER,
            to: process.env.ADMIN_EMAIL || process.env.PROFESSIONAL_EMAIL_TO || 'hr@testriq.com',
            subject: `New Job Application: ${jobTitle} - ${fullName}`,
            html: adminEmailHTML,
            attachments: resumeBuffer ? [
                {
                    filename: resume.name,
                    content: resumeBuffer,
                    contentType: resume.type || 'application/octet-stream',
                },
            ] : [],
        };

        const mailOptionsUser = {
            from: process.env.SMTP_USER,
            to: email,
            subject: `Application Received: ${jobTitle} - Testriq`,
            html: userEmailHTML,
        };



        // Create promises for independent execution
        const emailPromise = (async () => {
            try {
                // ... existing email sending code ...
                await transporter.sendMail(mailOptionsAdmin);
                await transporter.sendMail(mailOptionsUser);
                console.log('[apply-job API] Emails sent successfully');
            } catch (error) {
                console.error('[apply-job API] Error sending emails:', error);
                throw error; // Re-throw to be caught by allSettled
            }
        })();


        const sheetsPromise = (async () => {
            // Google Sheets Integration
            try {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                let authClient: any;

                // Priority 1: Try OAuth2 (Solves Storage Quota Issues)
                if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_REFRESH_TOKEN) {
                    const oauth2Client = new google.auth.OAuth2(
                        process.env.GOOGLE_CLIENT_ID,
                        process.env.GOOGLE_CLIENT_SECRET
                    );
                    oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
                    authClient = oauth2Client;
                    console.log('[apply-job API] Authenticating via OAuth2 (User Identity)');
                }
                // Priority 2: Service Account (Fallback)
                else if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
                    const SCOPES = [
                        'https://www.googleapis.com/auth/spreadsheets',
                        'https://www.googleapis.com/auth/drive.file',
                    ];
                    authClient = new JWT({
                        email: process.env.GOOGLE_CLIENT_EMAIL,
                        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                        scopes: SCOPES,
                    });
                    console.log(`[apply-job API] Authenticating via Service Account: '${process.env.GOOGLE_CLIENT_EMAIL}'`);
                }

                if (authClient) {
                    // 1. Upload Resume to Google Drive (if exists)
                    let resumeLink = 'Not Provided';
                    if (resume && resumeBuffer) {
                        try {
                            const drive = google.drive({ version: 'v3', auth: authClient });

                            // Check for configured folder ID
                            const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
                            if (folderId) {
                                console.log(`[apply-job API] Using Folder ID: '${folderId}' (Length: ${folderId.length})`);
                            }

                            // If using Service Account and NO Shared Drive, this usually fails.
                            // If using OAuth2, it works on "My Drive".
                            const parents = folderId ? [folderId] : [];

                            const fileMetadata = {
                                name: `${fullName}_${jobTitle}_Resume.pdf`,
                                parents: parents
                            };

                            const media = {
                                mimeType: resume.type || 'application/pdf',
                                body: Readable.from(resumeBuffer),
                            };

                            const file = await drive.files.create({
                                requestBody: fileMetadata,
                                media: media,
                                fields: 'id, webViewLink',
                            });

                            console.log('[apply-job API] Resume uploaded to Drive, ID:', file.data.id);

                            await drive.permissions.create({
                                fileId: file.data.id!,
                                requestBody: { role: 'reader', type: 'anyone' },
                            });

                            resumeLink = file.data.webViewLink || 'Uploaded (Link unavailable)';

                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        } catch (driveError: any) {
                            console.error('[apply-job API] Error uploading to Drive:', JSON.stringify(driveError, null, 2));
                            if (driveError.code === 403 && driveError.message.includes('quota')) {
                                resumeLink = `Upload Failed: Storage Quota Exceeded via Service Account. Switch to OAuth2.`;
                            } else {
                                resumeLink = `Upload Failed: ${driveError.message || 'Unknown Error'}`;
                            }
                        }
                    } else if (resume) {
                        resumeLink = 'Attached in Email';
                    }

                    const doc = new GoogleSpreadsheet(process.env.GOOGLE_CAREER_SHEET_ID as string, authClient);


                    await doc.loadInfo();
                    const sheet = doc.sheetsByIndex[0]; // Assuming the first sheet

                    // Define expected headers based on user request
                    const headers = [
                        'Timestamp',
                        'Job Role',
                        'Job ID',
                        'Full Name',
                        'Phone Number',
                        'Email',
                        'Location',
                        'Total Experience',
                        'Current CTC',
                        'Expected CTC',
                        'Notice Period',
                        'Skills, Tools & Frameworks',
                        'Domain Knowledge',
                        'Resume/CV'
                    ];

                    await sheet.loadHeaderRow();
                    // Update headers to ensure all columns exist
                    await sheet.setHeaderRow(headers);

                    await sheet.addRow({
                        'Timestamp': new Date().toISOString(),
                        'Job Role': jobTitle,
                        'Job ID': jobId,
                        'Full Name': fullName,
                        'Email': email,
                        'Phone Number': phone,
                        'Location': location,
                        'Total Experience': experience,
                        'Current CTC': currentCTC,
                        'Expected CTC': expectedCTC,
                        'Notice Period': noticePeriod,
                        'Skills, Tools & Frameworks': skillsToolsFramework,
                        'Domain Knowledge': domainKnowledge.join(', '),
                        'Resume/CV': resumeLink
                    });
                    console.log('[apply-job API] Added to Google Sheet');

                } else {
                    const missingVars = [];
                    if (!process.env.GOOGLE_CAREER_SHEET_ID) missingVars.push('GOOGLE_CAREER_SHEET_ID');

                    if (!process.env.GOOGLE_CLIENT_ID && !process.env.GOOGLE_CLIENT_EMAIL) {
                        missingVars.push('GOOGLE_CLIENT_ID (for OAuth) or GOOGLE_CLIENT_EMAIL (for Service Account)');
                    }

                    console.warn(`[apply-job API] Google credentials missing. The following variables are undefined or empty: ${missingVars.join(', ')}`);
                }
            } catch (sheetError) {
                console.error('[apply-job API] Error updating Google Sheet:', sheetError);
                throw sheetError;
            }
        })();

        // Wait for both to complete (or fail) independently
        const results = await Promise.allSettled([emailPromise, sheetsPromise]);

        // Check results for logging purposes
        const emailResult = results[0];
        const sheetResult = results[1];

        if (emailResult.status === 'rejected') {
            console.warn('[apply-job API] Email sending failed, but continuing response.');
        }
        if (sheetResult.status === 'rejected') {
            console.warn('[apply-job API] Sheet update failed, but continuing response.');
        }

        return NextResponse.json({ message: 'Application process completed.' });
    } catch (error) {
        console.error('Error submitting application:', error);
        return NextResponse.json({ message: 'Error submitting application' }, { status: 500 });
    }
}
