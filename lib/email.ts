import "server-only";
import nodemailer from "nodemailer";
import type { QuoteInput } from "@/lib/validation";

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[character] ?? character);
}

function cleanHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function sendQuoteEmail(quote: QuoteInput): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_AUTH_MODE, SMTP_OAUTH_CLIENT_ID, SMTP_OAUTH_CLIENT_SECRET, SMTP_OAUTH_REFRESH_TOKEN, SMTP_OAUTH_ACCESS_URL, SMTP_OAUTH_SCOPE, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL } = process.env;
  const oauthReady = Boolean(SMTP_OAUTH_CLIENT_ID && SMTP_OAUTH_CLIENT_SECRET && SMTP_OAUTH_REFRESH_TOKEN);
  const passwordReady = Boolean(SMTP_PASS);
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !QUOTE_TO_EMAIL || !QUOTE_FROM_EMAIL || (SMTP_AUTH_MODE === "oauth2" ? !oauthReady : !passwordReady)) {
    throw new Error("Quote email is not configured");
  }
  const auth = SMTP_AUTH_MODE === "oauth2"
    ? {
        type: "OAuth2" as const,
        user: SMTP_USER,
        clientId: SMTP_OAUTH_CLIENT_ID!,
        clientSecret: SMTP_OAUTH_CLIENT_SECRET!,
        refreshToken: SMTP_OAUTH_REFRESH_TOKEN!,
        accessUrl: SMTP_OAUTH_ACCESS_URL || "https://login.microsoftonline.com/consumers/oauth2/v2.0/token",
        customParams: { scope: SMTP_OAUTH_SCOPE || "https://outlook.office.com/SMTP.Send offline_access" }
      }
    : { user: SMTP_USER, pass: SMTP_PASS! };
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000
  });
  const submittedAt = new Intl.DateTimeFormat("en-GB", { dateStyle: "full", timeStyle: "short", timeZone: "Europe/London" }).format(new Date());
  const fields: Array<[string, string]> = [
    ["Name", quote.name], ["Email", quote.email], ["Phone", quote.phone || "Not provided"],
    ["Service", quote.service], ["Area", quote.area || "Not provided"],
    ["Preferred contact", quote.contactMethod || "No preference"], ["Preferred timing", quote.timing || "Flexible"],
    ["Project details", quote.details], ["Submitted", submittedAt]
  ];
  const text = ["New website quote enquiry — CR Electrics", ...fields.map(([label, value]) => `${label}:\n${value}`)].join("\n\n");
  const html = `<h1>New website quote enquiry — CR Electrics</h1><p>Submitted: ${escapeHtml(submittedAt)} (UK time)</p><table>${fields.map(([label, value]) => `<tr><th align="left" valign="top">${escapeHtml(label)}</th><td>${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`).join("")}</table>`;
  await transporter.sendMail({
    from: { name: "CR Electrics website", address: QUOTE_FROM_EMAIL },
    to: QUOTE_TO_EMAIL,
    replyTo: { name: cleanHeader(quote.name), address: quote.email },
    subject: `New website quote enquiry — ${cleanHeader(quote.name)}`,
    text,
    html
  });
}
