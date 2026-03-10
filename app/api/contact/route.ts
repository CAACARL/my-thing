import nodemailer from "nodemailer";

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Validate environment variables
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      throw new Error("Missing SMTP configuration in environment variables");
    }

    const smtpPort = Number(process.env.SMTP_PORT);
    // For Gmail: 465 uses SSL (secure: true), 587 uses TLS (secure: false)
    const isSecure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 15000,
      socketTimeout: 15000,
    });

    try {
      await transporter.verify();
    } catch (verifyError) {
      throw new Error(
        `Cannot connect to SMTP server at ${process.env.SMTP_HOST}:${smtpPort}. ` +
          `Make sure the SMTP server is running and credentials are correct. ` +
          `Error: ${verifyError instanceof Error ? verifyError.message : String(verifyError)}`,
      );
    }

    // Always send to this Gmail (ignores env "to" address).
    const toAddress = "dinklecarl@gmail.com";

    const info = await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `Contact Form Message from ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Message:</b> ${escapeHtml(message)}</p>
      `,
    });

    console.log("Email sent successfully:", info.response);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Email error:", error);

    const message = error instanceof Error ? error.message : "Failed to send email";

    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
