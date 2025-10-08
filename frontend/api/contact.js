import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });


import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(500).json({ error: "Form parsing failed" });
    }

    const { name, contact, email, subject, message } = fields;
    const attachment = files.attachment;

    try {
      // 🔧 Zoho SMTP configuration
      const transporter = nodemailer.createTransport({
        host: "smtp.zoho.com.au",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // 📎 Attachments if any
      const attachments = [];
      if (attachment && attachment.filepath) {
        attachments.push({
          filename: attachment.originalFilename,
          content: fs.createReadStream(attachment.filepath),
        });
      }

      // 🌈 Brand-themed HTML template
      const htmlTemplate = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f5f7fa; padding: 30px;">
        <table style="max-width:600px;margin:auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 4px 8px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color:#282c34;text-align:center;padding:25px;">
              <img src="https://www.energyratingstudio.com.au/ers_logo.png" alt="Energy Rating Studio" style="height:60px;margin-bottom:10px;" />
              <h2 style="color:#61dafb;margin:0;">New Contact Form Message</h2>
            </td>
          </tr>
          <tr>
            <td style="padding:25px;color:#333;">
              <p style="font-size:16px;">You’ve received a new message from your website contact form.</p>
              <table style="width:100%;margin-top:15px;border-collapse:collapse;">
                <tr><td style="font-weight:bold;padding:6px 0;width:120px;">Name:</td><td>${name}</td></tr>
                <tr><td style="font-weight:bold;padding:6px 0;">Contact:</td><td>${contact || "-"}</td></tr>
                <tr><td style="font-weight:bold;padding:6px 0;">Email:</td><td>${email}</td></tr>
                <tr><td style="font-weight:bold;padding:6px 0;">Subject:</td><td>${subject || "Not specified"}</td></tr>
              </table>
              <div style="margin-top:20px;padding:15px;background-color:#eafbea;border-left:5px solid #45a049;">
                <p style="margin:0;font-size:15px;color:#111;">${message}</p>
              </div>
              <p style="margin-top:25px;font-size:14px;color:#666;">This message was sent from the <b>Energy Rating Studio</b> contact form.</p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#282c34;text-align:center;padding:15px;">
              <p style="color:#61dafb;font-size:13px;margin:0;">© ${new Date().getFullYear()} Energy Rating Studio — All rights reserved.</p>
              <p style="margin:4px 0 0 0;"><a href="https://www.energyratingstudio.com.au" style="color:#45a049;text-decoration:none;">Visit Website</a></p>
            </td>
          </tr>
        </table>
      </div>`;

      console.log("🔍 Backend check start...");
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASS exists:", !!process.env.SMTP_PASS);
    console.log("Receiver:", process.env.RECEIVER_EMAIL);

      const mailOptions = {
        from: `"Energy Rating Studio" <${process.env.SMTP_USER}>`,
        to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
        subject: subject || "New Contact Form Message",
        html: htmlTemplate,
        attachments,
      };

      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Email send error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }
  });
}
