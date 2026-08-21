// ⚠️ DEAD ROUTE — DO NOT WIRE THIS UP WITHOUT READING THIS FIRST.
//
// Nothing calls this endpoint. Its only caller was JobDetailsPage.tsx, which is
// no longer imported anywhere. It is left in place deliberately, but it carries
// two unfixed bugs that will corrupt the live careers sheet the moment it runs:
//
// 1. SAME SHEET, CONFLICTING HEADERS. This route writes to the same
//    GOOGLE_CAREER_SHEET_ID / sheetsByIndex[0] as /api/apply-job, but forces a
//    DIFFERENT 10-column header set (see the `headers` array below) — no Job ID,
//    no Expected CTC, no Skills, no Domain Knowledge, and 'Email Address' where
//    apply-job has 'Email'. Because it calls setHeaderRow() unconditionally, one
//    submission here rewrites row 1 and every existing row ends up sitting under
//    the wrong column names. apply-job would then flip it back on its next run.
//
// 2. SILENT ROW LOSS. addRow() below still uses the library default
//    insertDataOption=OVERWRITE, where the Sheets API guesses where the table
//    ends and writes there. Two appends landing close together can resolve to the
//    same row, and the second destroys the first while still returning 200. This
//    is the bug that silently dropped ~26 applications between July and August
//    2026 (loss rate 5% -> 19% as volume grew). It was fixed in
//    /api/apply-job/route.ts by passing { insert: true }; it is NOT fixed here.
//
// Before reviving this route: pass { insert: true } to addRow, and either point
// it at its own sheet/tab or align its headers with apply-job's 14-column set.
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { google } from 'googleapis';
import { Readable } from 'stream';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get('fullName') as string;
    const mobileNumber = formData.get('mobileNumber') as string;
    const emailAddress = formData.get('emailAddress') as string;
    const currentLocation = formData.get('currentLocation') as string;
    const noticePeriod = formData.get('noticePeriod') as string;
    const role = formData.get('role') as string;
    const totalYearsExperience = formData.get('totalYearsExperience') as string;
    const currentCTC = formData.get('currentCTC') as string;
    const resume = formData.get('resume') as File | null;

    // Convert resume to buffer for attachment & drive upload
    let resumeBuffer: Buffer | undefined;
    if (resume) {
      const arrayBuffer = await resume.arrayBuffer();
      resumeBuffer = Buffer.from(arrayBuffer);
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to HR
    const hrEmailContent = `
      <h2>New Job Application Received</h2>
      <p><strong>Position:</strong> ${role}</p>
      <p><strong>Applicant Details:</strong></p>
      <ul>
        <li><strong>Full Name:</strong> ${fullName}</li>
        <li><strong>Mobile:</strong> ${mobileNumber}</li>
        <li><strong>Email:</strong> ${emailAddress}</li>
        <li><strong>Current Location:</strong> ${currentLocation}</li>
        <li><strong>Notice Period:</strong> ${noticePeriod}</li>
        <li><strong>Total Experience:</strong> ${totalYearsExperience} years</li>
        <li><strong>Current CTC:</strong> ${currentCTC} LPA</li>
      </ul>
      <p>Please find the resume attached.</p>
    `;

    // Email to applicant
    const applicantEmailContent = `
      <h2>Thank you for your application!</h2>
      <p>Dear ${fullName},</p>
      <p>Thank you for applying for the position of <strong>${role}</strong> at Testriq.</p>
      <p>We have received your application and our HR team will review it shortly. We will get back to you within 2-3 business days.</p>
      <p>Application Details:</p>
      <ul>
        <li><strong>Position:</strong> ${role}</li>
        <li><strong>Application Date:</strong> ${new Date().toLocaleDateString()}</li>
        <li><strong>Experience:</strong> ${totalYearsExperience} years</li>
      </ul>
      <p>Best regards,<br>Testriq HR Team</p>
    `;

    const emailPromise = (async () => {
        try {
            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to: 'prakash.mishra@testriq.com',
                subject: `New Job Application - ${role} - ${fullName}`,
                html: hrEmailContent,
                attachments: resume && resumeBuffer ? [{
                    filename: resume.name,
                    content: resumeBuffer,
                    contentType: 'application/pdf'
                }] : []
            });

            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to: emailAddress,
                subject: `Application Received - ${role} Position at Testriq`,
                html: applicantEmailContent,
            });
            console.log('[send-application API] Emails sent successfully');
        } catch (error) {
            console.error('[send-application API] Error sending emails:', error);
            throw error;
        }
    })();

    const sheetsPromise = (async () => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let authClient: any;

            if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_REFRESH_TOKEN) {
                const oauth2Client = new google.auth.OAuth2(
                    process.env.GOOGLE_CLIENT_ID,
                    process.env.GOOGLE_CLIENT_SECRET
                );
                oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
                authClient = oauth2Client;
                console.log('[send-application API] Authenticating via OAuth2 (User Identity)');
            } else if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
                const SCOPES = [
                    'https://www.googleapis.com/auth/spreadsheets',
                    'https://www.googleapis.com/auth/drive.file',
                ];
                authClient = new JWT({
                    email: process.env.GOOGLE_CLIENT_EMAIL,
                    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                    scopes: SCOPES,
                });
                console.log(`[send-application API] Authenticating via Service Account: '${process.env.GOOGLE_CLIENT_EMAIL}'`);
            }

            if (authClient) {
                let resumeLink = 'Not Provided';
                if (resume && resumeBuffer) {
                    try {
                        const drive = google.drive({ version: 'v3', auth: authClient });
                        const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
                        const parents = folderId ? [folderId] : [];

                        const fileMetadata = {
                            name: `${fullName}_${role}_Resume.pdf`,
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

                        console.log('[send-application API] Resume uploaded to Drive, ID:', file.data.id);

                        await drive.permissions.create({
                            fileId: file.data.id!,
                            requestBody: { role: 'reader', type: 'anyone' },
                        });

                        resumeLink = file.data.webViewLink || 'Uploaded (Link unavailable)';
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } catch (driveError: any) {
                        console.error('[send-application API] Error uploading to Drive:', driveError.message);
                        resumeLink = `Upload Failed: ${driveError.message || 'Unknown Error'}`;
                    }
                } else if (resume) {
                    resumeLink = 'Attached in Email';
                }

                const doc = new GoogleSpreadsheet(process.env.GOOGLE_CAREER_SHEET_ID as string, authClient);
                await doc.loadInfo();
                const sheet = doc.sheetsByIndex[0];

                // ⚠️ BUG 1 (see file header): these 10 headers CONFLICT with the
                // 14 that /api/apply-job writes to this exact same sheet and tab.
                // setHeaderRow() below applies them unconditionally, so running this
                // route once shifts every existing row under the wrong column names.
                // Setting header formats with Phone Number and Email interchanged per user request
                const headers = [
                    'Timestamp',
                    'Job Role',
                    'Full Name',
                    'Phone Number',
                    'Email Address',
                    'Location',
                    'Total Experience',
                    'Current CTC',
                    'Notice Period',
                    'Resume/CV'
                ];

                await sheet.loadHeaderRow().catch(() => {}); // Catch if empty

                // Always enforce new format headers
                await sheet.setHeaderRow(headers);

                // ⚠️ BUG 2 (see file header): missing { insert: true }. This defaults to
                // insertDataOption=OVERWRITE and can silently overwrite an existing row
                // while still returning 200. Fixed in /api/apply-job/route.ts, not here.
                await sheet.addRow({
                    'Timestamp': new Date().toISOString(),
                    'Job Role': role || 'Not Specified',
                    'Full Name': fullName,
                    'Phone Number': mobileNumber,
                    'Email Address': emailAddress,
                    'Location': currentLocation,
                    'Total Experience': totalYearsExperience,
                    'Current CTC': currentCTC,
                    'Notice Period': noticePeriod,
                    'Resume/CV': resumeLink
                });
                console.log('[send-application API] Added to Google Sheet');

            } else {
                console.warn('[send-application API] Google credentials missing. Sheet will not be updated.');
            }
        } catch (sheetError) {
            console.error('[send-application API] Error updating Google Sheet:', sheetError);
            throw sheetError;
        }
    })();

    // Wait for both email and sheet actions to complete concurrently
    const results = await Promise.allSettled([emailPromise, sheetsPromise]);

    if (results[0].status === 'rejected') {
        console.warn('Email sending failed.');
    }
    if (results[1].status === 'rejected') {
        console.warn('Sheet update failed.');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully! You will receive a confirmation email shortly.' 
    });

  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit application. Please try again.' 
    }, { status: 500 });
  }
}
