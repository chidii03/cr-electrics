import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation";
import { sendQuoteEmail } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const responseHeaders = { "Cache-Control": "no-store, max-age=0", "X-Content-Type-Options": "nosniff" };

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      const requestOrigin = new URL(request.url).origin;
      const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin : requestOrigin;
      if (origin !== requestOrigin && origin !== configuredOrigin) {
        return NextResponse.json({ error: "Request origin is not allowed." }, { status: 403, headers: responseHeaders });
      }
    } catch {
      return NextResponse.json({ error: "Request origin is not allowed." }, { status: 403, headers: responseHeaders });
    }
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) return NextResponse.json({ error: "Request is too large." }, { status: 413, headers: responseHeaders });

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 20_000) return NextResponse.json({ error: "Request is too large." }, { status: 413, headers: responseHeaders });
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400, headers: responseHeaders });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Please check the enquiry fields and try again." }, { status: 400, headers: responseHeaders });
  if (parsed.data.website.trim()) return NextResponse.json({ error: "The enquiry could not be accepted." }, { status: 400, headers: responseHeaders });

  try {
    await sendQuoteEmail(parsed.data);
    return NextResponse.json({ success: true }, { status: 200, headers: responseHeaders });
  } catch {
    // SMTP diagnostics stay on the server; visitor responses never include provider errors or credentials.
    return NextResponse.json({ error: "Email delivery is temporarily unavailable." }, { status: 503, headers: responseHeaders });
  }
}
