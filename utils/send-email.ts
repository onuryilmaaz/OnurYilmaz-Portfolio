import type { ContactFormData } from "@/lib/types";

export async function sendEmail(data: ContactFormData): Promise<void> {
  const response = await fetch("/api/email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to send email: ${response.status}`);
  }
}
