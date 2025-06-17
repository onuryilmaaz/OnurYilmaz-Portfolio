import { FormData } from "@/components/contact";

export async function sendEmail(data: FormData): Promise<void> {
  const apiEndpoint = "/api/email";

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to send email: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result.message);
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
}
