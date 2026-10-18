# CR Electrics website

Next.js App Router website for CR Electrics. Project images and the supplied logo are stored under `app/public` and imported as static image assets.

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and configure the email provider credentials.
3. Start the development server with `npm run dev`.

The current `.env` is prefilled with the published Outlook.com address and Microsoft's documented SMTP host, port and STARTTLS settings. Outlook.com requires Modern Auth/OAuth2, so `SMTP_PASS` is intentionally blank and unused in OAuth mode. Add the Microsoft app registration client ID, client secret and refresh token. Do not commit `.env.local`. For another provider, use `SMTP_AUTH_MODE=password` with that provider's SMTP credentials. The sender must be authorized by the provider.

## Required environment variables

`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_AUTH_MODE`, `SMTP_OAUTH_CLIENT_ID`, `SMTP_OAUTH_CLIENT_SECRET`, `SMTP_OAUTH_REFRESH_TOKEN`, `SMTP_OAUTH_ACCESS_URL`, `SMTP_OAUTH_SCOPE`, `QUOTE_TO_EMAIL`, `QUOTE_FROM_EMAIL`, and `NEXT_PUBLIC_SITE_URL` are listed in `.env.example`. Quote submission reports success only after the SMTP server accepts delivery.

## Quote endpoint protection

The route validates every submitted field, caps the JSON request size, checks the request origin when supplied, and rejects a populated honeypot. It does not implement shared IP rate limiting. For a serverless deployment, connect a provider-backed limiter (for example, Redis/Upstash or the hosting platform's request controls) before treating this endpoint as protected against distributed spam.

## Content requiring client approval

The service catalogue reflects the supplied project brief, but Connor should confirm which services and areas are currently offered. The supplied Instagram screenshots are shown without fabricated or paraphrased reviews; obtain permission to republish handles and review text. Replace screenshot captures with clean original project photos where available. Confirm the privacy controller/legal identity, lawful basis and retention period before accepting live personal data.

Supporting hero photography is from Unsplash and is labelled as illustrative, not as a CR Electrics job. The image page lists the photo as free to use under the Unsplash License: https://unsplash.com/photos/a-modern-pendant-light-fixture-hangs-indoors-uIjVZb9TEDQ
