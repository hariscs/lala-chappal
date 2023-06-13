import nodemailer from "nodemailer";

export const mailer = async (email: string, subject: string, html: any) => {
  try {
    const transport = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transport.sendMail({
      from: process.env.NOREPLY,
      to: email,
      subject: subject,
      html: html,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const ADMIN_EMAIL = "harisshah385@gmail.com";
