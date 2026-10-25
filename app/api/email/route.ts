import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getErrorMessage, validateString } from "@/lib/utils";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const { name, email, message } = body ?? {};

  if (
    !validateString(name, 500) ||
    !validateString(email, 500) ||
    !EMAIL_PATTERN.test(email) ||
    !validateString(message, 5000)
  ) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // service: "gmail" is shorthand for host smtp.gmail.com, port 465, secure: true.
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  try {
    await transport.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      replyTo: email,
      subject: `Message from ${name} (${email})`,
      text: message,
    });
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: getErrorMessage(err) }, { status: 500 });
  }
}
