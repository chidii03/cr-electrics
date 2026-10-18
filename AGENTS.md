CR ELECTRICS LIVERPOOL — PRODUCT REQUIREMENTS DOCUMENT & CODEX MASTER BUILD PROMPT

Project: CR Electrics — premium electrical services website
Client: Connor / CR Electrics Liverpool
Primary market: Liverpool and the North West of England (confirm exact service areas with client)
Primary objective: Generate qualified quotation enquiries and establish a credible, premium online presence
Project status: Build production-ready frontend and enquiry delivery; do not invent business facts or testimonials
Implementation stack: Next.js App Router, React, TypeScript, Tailwind CSS, React Icons (react-icons/fa6), Framer Motion (framer-motion), Node.js API route, Nodemailer
Contact phone: +44 07599 637166 (display as supplied; normalize to +447599637166 for WhatsApp URL if validated)
Email: cr.electrics@outlook.com
Visual references supplied: CR Electrics logo and Instagram screenshots showing lighting installations, fuseboard Upgrades/consumer-unit work, Outdoor Sockets, Indoor Sockets, Spotlights, Garden Lighting, LED Lighting, Rewires and EICR/testing work.

────────

1. MASTER INSTRUCTION TO CODEX

Act as a senior product designer, UX researcher, visual designer, conversion-rate specialist, accessibility specialist, SEO engineer, and senior full-stack Next.js developer working as one high-performing team. Build a polished, bespoke, production-minded website for CR Electrics Liverpool.

Do not stop at a plan, wireframe, static mockup, or generic template. Inspect the existing repository first, load and follow any available frontend/design skills and project instructions, then implement the working website end to end. If the repository is empty, scaffold the project. Preserve existing working conventions if a project already exists.

Before coding:

1. Inspect the repository, package manager, installed dependencies, existing components, and any AGENTS.md or project instructions.
2. Load the available frontend/design skills relevant to Next.js, React, Tailwind, accessibility, responsive UI, and visual polish. Follow their instructions.
3. Study current design inspiration from Dribbble, Godly, and 21st.dev for high-quality editorial layouts, premium service-business websites, typography, navigation, card design, forms, responsive patterns, and restrained motion. Treat these as inspiration, not assets to copy. Do not clone a specific site.
4. Review all supplied CR Electrics reference images. Preserve the identity of the circular blue-grey CR Electrics logo and use the supplied real installation photos where appropriate. Do not replace the client’s real work with fabricated portfolio imagery.
5. Define the design tokens and page architecture before implementation.
6. Implement the website, run available lint/type-check/build commands, fix issues, and report exactly what is complete and what needs credentials or client content.

Non-negotiable quality bar

• The website must feel bespoke, high-class, professional, calm, trustworthy, and exceptionally well-finished.
• White is the dominant page background. Use carefully layered whites and sophisticated light/mid greys. Use the existing logo’s muted blue-grey as a restrained brand accent; do not make the site predominantly dark.
• Avoid generic AI-generated website aesthetics, oversized gradients, gratuitous glassmorphism, excessive rounded cards, random decorative blobs, clutter, and animations that harm usability.
• Every page must have a clear purpose and complete, useful content. No “Lorem ipsum,” empty sections, fake case studies, fake ratings, fake reviews, fake accreditations, dead buttons, or “coming soon” filler.
• Do not claim a feature works until it has been implemented and tested.
• Never invent qualifications, NICEIC/NAPIT registration, insurance, years in business, guarantees, customer counts, response times, review scores, or service-area coverage.
• Where genuine information is not yet available, use honest, useful copy and a clear content/configuration point for the developer to update. Do not render conspicuous placeholders to public visitors.
• Keep components reusable, code typed, accessible, and maintainable.
• The result must work exceptionally well on small mobile screens as well as desktop.
• Do not stop after building the homepage. Build every required route and connect the navigation and forms.

────────

2. BUSINESS CONTEXT & GOALS

CR Electrics is an electrical services business based in the Liverpool/North West area. The client’s Instagram profile describes internal and external power and lighting installations and CCTV. Supplied posts/highlights also show examples related to lighting, fuseboards/consumer units, and EICR/electrical testing.

Primary business goal

Turn visitors into legitimate enquiries for electrical work and quotation requests.

Secondary goals

• Make CR Electrics appear credible and professional to prospective domestic and commercial customers.
• Present genuine work in a strong visual portfolio.
• Make phone, email, and WhatsApp contact effortless.
• Explain services clearly so visitors can choose the right service.
• Support local SEO for Liverpool and only the surrounding areas the client confirms.
• Make it straightforward for Connor to add approved project photos, customer reviews, and business information later.

Audience

• Homeowners needing lighting, power, consumer-unit, testing, or other confirmed electrical services.
• People renovating or improving their homes.
• Landlords or property managers looking for electrical work, where relevant to services actually offered.
• Commercial customers only if the client confirms that these projects are in scope.

Success indicators

• Visitors submit complete, useful quote enquiries.
• Visitors use click-to-call, WhatsApp, or email links.
• Service pages are easy to discover and understand.
• Portfolio and testimonials establish trust using genuine material.
• Good mobile usability, accessible interactions, fast page loading, and clean SEO metadata.

────────

3. BRAND & VISUAL DESIGN SYSTEM

Brand identity

Use the supplied circular CR ELECTRICS logo as the principal brand mark. The logo uses a muted slate/blue-grey field, pale rings, geometric linework, and white lettering. Keep it legible; do not stretch, redraw, distort, recolor, or place it on a low-contrast background.

Colour direction

Build a refined white/grey design system with a restrained blue-grey brand accent.

Suggested tokens (adjust slightly if the supplied logo image indicates a closer match):

• --background: #FFFFFF
• --surface: #F7F8FA
• --surface-muted: #F0F2F4
• --border: #E2E5E9
• --text: #17191C
• --text-secondary: #646B73
• --text-muted: #858C94
• --brand: #536F80 (muted slate blue-grey sampled conceptually from logo; tune to actual asset)
• --brand-hover: #405968
• --focus: #2F6FED or another accessible focus colour
• --success and --error: accessible, restrained status colours

Do not use the accent for every element. The overall impression should remain white, light, spacious, and architectural. Verify colour contrast for all text and controls.

Typography

Use a contemporary, highly legible sans-serif typeface. Prefer a clean font such as Geist or Inter, using next/font when practical. Establish a clear hierarchy:

• Large, confident but not oversized homepage headline.
• Compact, well-spaced page titles.
• Readable paragraph widths and line heights.
• Clear form labels, validation messages, navigation labels, and card headings.
• Avoid too many font weights or all-caps text.

Layout

• Use a consistent max-width container and responsive spacing scale.
• Use generous whitespace, crisp alignment, thin grey borders, and understated shadows only where they help hierarchy.
• Use rounded corners sparingly and consistently; avoid making every element a pill.
• Build strong editorial composition with deliberate image crops, clear headings, and good visual rhythm.
• Use real photos of the client’s work in the portfolio and selected service sections.
• Unsplash may be used for tasteful supporting imagery where necessary, including professional white male electricians at work, tools, or modern residential lighting. Prefer images that look authentic to UK homes and trades. Do not imply stock-photo people are Connor or his employees. Do not use stock photos as fabricated completed projects.
• Use image optimization (next/image) where compatible and provide appropriate alt text.

Motion

Use Framer Motion (framer-motion) for restrained, purposeful transitions:

• Short opacity/translate reveals on initial entry where they improve hierarchy.
• Subtle hover states on service and portfolio cards.
• Smooth mobile navigation/menu transitions.
• Respect prefers-reduced-motion.
• Do not delay content, cause layout shifts, animate every element, or make forms difficult to use.
• Ensure essential content is visible without requiring animation to run.

Icons

Use react-icons/fa6 for Font Awesome 6 icons. Use icons consistently, with accessible labels where icons are interactive. Avoid emoji as interface icons.

Overall reference

Think high-quality independent design studio: sophisticated typography, premium whitespace, excellent responsive composition, carefully art-directed imagery, and meticulous UX. The website should feel like a custom build, not a downloaded electrician template.

────────

4. INFORMATION ARCHITECTURE & ROUTES

Implement these real Next.js App Router routes:

• / — Home
• /about — About Us
• /services — Services overview
• /services/[slug] — Individual service detail pages for confirmed services
• /our-work — Projects/portfolio
• /reviews — Customer reviews/testimonials
• /contact — Contact and Get a Quote

Use a shared global layout with consistent header, footer, WhatsApp contact badge, metadata, and responsive navigation. All navigation items and calls to action must lead to real routes or valid actions.

Do not create pages that only contain duplicated generic copy. Each page should answer a different user need.

────────

5. GLOBAL HEADER, NAVIGATION & FOOTER

Header

• Use the supplied logo and a text wordmark, “CR Electrics.”
• Main nav: Home, About Us, Services, Our Work, Reviews, Contact / Get a Quote.
• Prominent but tasteful “Get a Quote” CTA.
• Responsive mobile navigation with keyboard support, focus management, Escape-to-close, and clear active states.
• Header may become subtly sticky after scroll if it improves navigation; avoid taking too much vertical space on mobile.
• Ensure logo and navigation remain crisp against the white background.

Persistent WhatsApp badge

• Include a discreet, well-designed floating WhatsApp contact badge on all primary pages, positioned so it does not cover important mobile content or form buttons.
• Link to https://wa.me/447599637166 only after verifying that this normalized international number is correct. The supplied display number is +44 07599 637166; standard international WhatsApp URLs omit the trunk-prefix zero after the country code.
• Use a prefilled, polite opening message such as: “Hi CR Electrics, I’d like to enquire about an electrical job. Could you please advise on the next steps?”
• Open externally with safe link attributes and accessible label.
• On mobile, account for safe areas and bottom navigation/browser UI.
• Do not claim WhatsApp is staffed 24/7 or promise response times.

Footer

Include:

• Logo and a concise, truthful business summary.
• Navigation links
  instagram - @cr.electrics_liverpool, https://www.instagram.com/cr.electrics_liverpool?mdxt=MThmc3owZDV0d2F4aw==
  facebook - CR Electrics, https://www.facebook.com/profile.php?id=100090236060536&mibextid=wwXIfr.
  tiktok - @crelectrics, https://www.tiktok.com/@cr.electrics?_r=1&_t=ZS-9AdfAZXFUgb
• Confirmed services.
• Phone: +44 07599 637166 with a tel: link using the normalized number.
• Email: cr.electrics@outlook.com.
• WhatsApp link.
• Service-area statement limited to confirmed coverage. Until confirmed, say “Based in Liverpool; contact us to confirm availability in your area.”
• Links to Privacy Policy and any other legal pages only if implemented. If a privacy page is necessary because the quote form collects personal data, implement /privacy with accurate plain-language copy and a configurable data-controller/contact detail. Do not invent a registered company name or legal identity.
• Current year generated dynamically or at build/runtime.
• Do not display unverified accreditations, partner logos, ratings, or social links.

────────

6. HOMEPAGE REQUIREMENTS (/)

The homepage should guide a visitor from first impression to an enquiry without overwhelming them.

Section 1: Hero

Create an elegant, confident hero with:

• A clear headline such as “Electrical work, done properly.” or similarly concise, premium copy.
• A short supporting statement explaining the actual confirmed services and Liverpool/North West positioning without exaggerated claims.
• Primary CTA: “Get a Quote.”
• Secondary CTA: “View Our Work.”
• A prominent, high-quality image composition: prioritize the client’s genuine installation photography if quality/cropping permits. A supporting Unsplash image may be used elsewhere, but must not be presented as a completed CR Electrics project.
• Optional small service descriptor row: “Lighting · Electrical Installations · CCTV” only if confirmed.
• No fake badges, fabricated star ratings, or unsupported “trusted by hundreds” claims.

Section 2: Trust strip

Use concise, truthful benefits such as:

• “Clear quotation process”
• “Work tailored to your property”
• “Direct contact with CR Electrics”
Only include promises the client can uphold. Do not invent qualification or registration claims.

Section 3: Services overview

Create visually polished service cards linking to real detail pages. Initial candidate categories from the supplied profile/material:

• Internal & external lighting
• Power and electrical installations
• Consumer units / fuseboards
• EICR / electrical testing
• CCTV
Confirm every service with Connor before publishing. Each card should include a concise description, relevant icon/image, and link to details. Do not claim work is offered if not confirmed.

Section 4: Featured work

• Show a curated selection of genuine work supplied by the client.
• Use clear images, concise project captions, and category tags only when accurate.
• Link to /our-work.
• Build a reusable project-card component and data source.
• Do not invent project names, locations, dates, outcomes, or customer details.
• If the supplied content is insufficient, do not fill the space with fake case studies. Build a tasteful, honest “A look at our work” section using approved images and general descriptions.

Section 5: Why choose CR Electrics

Create a premium, easy-to-scan section emphasizing the real customer experience:

• Clear communication.
• Thoughtful attention to the job.
• Neat presentation of completed work, if supported by real photos.
• Straightforward quotation enquiries.
Avoid generic unprovable superlatives like “the best in the North West,” “number one,” or “100% satisfaction guaranteed.”

Section 6: Process

Explain a practical, non-binding process:

1. Tell us what work you need.
2. We review the enquiry and discuss relevant details.
3. We arrange next steps and a quotation where appropriate.
4. Work is scheduled and completed by agreement.
Use language that reflects the client’s actual process and does not promise specific response times.

Section 7: Reviews preview

• Display a small set of real, approved customer reviews from the Instagram material the client supplies.
• Show reviewer name/handle only when publicly visible and the client has permission to republish it.
• Link to /reviews.
• Do not create sample reviews, invented names, five-star ratings, or paraphrased statements presented as quotes.
• If genuine reviews have not yet been supplied/approved, use a neutral section inviting visitors to see the work or contact the business instead of publishing fake testimonials.

Section 8: FAQ

Implement an accessible, polished accordion with real answers. Initial questions:

1. What areas does CR Electrics cover?
2. What electrical services do you offer?
3. How do I request a quotation?
4. Can I send photos of the work I need?
5. Do you carry out consumer-unit or fuseboard upgrades?
6. Can I enquire about an EICR or electrical testing?
7. Do you install internal and external lighting?
8. Do you provide CCTV installation?
9. How can I contact CR Electrics?
10. How soon can the work be arranged?
Answers must be honest and configurable. For service coverage, testing, scheduling, and specific work, do not assume facts not supplied by the client. Explain that timing and suitability are confirmed after reviewing the job, rather than inventing service-level promises.

Section 9: Final CTA

A strong, clean closing section with:

• “Tell us about your electrical project.”
• A concise reassurance.
• “Get a Quote” and “Call CR Electrics” actions.

────────

7. ABOUT US (/about)

Build a complete, editorial-style About page with:

• A clear page title and business introduction.
• A genuine image of Connor/the team only if the client provides one; otherwise use approved work photography and do not identify a stock person as the owner.
• A truthful overview of CR Electrics based on supplied information.
• A “How we work” section with clear communication and careful planning, expressed without unverified guarantees.
• A selected-services summary linked to service pages.
• A small genuine-work gallery.
• CTA to request a quote.

Do not invent the company’s founding date, founder biography, qualifications, number of completed jobs, years of experience, insurance, memberships, or accreditations. If those facts are later provided, add them through a central content file.

────────

8. SERVICES (/services AND /services/[slug])

Services overview

• Present every confirmed service in a clear grid/list with unique, useful descriptions.
• Each card links to its own service detail page.
• Include a quote CTA and links to relevant work examples when available.
• Avoid SEO keyword stuffing and repeated generic copy.

Candidate service detail pages

Create routes only for services confirmed by the client:

• /services/lighting-installations
• /services/electrical-installations
• /services/consumer-unit-upgrades
• /services/eicr-electrical-testing
• /services/cctv-installation

If the project needs to be implemented before confirmation, make the routes/content data-driven and keep unconfirmed service pages unpublished or excluded from navigation and sitemap until approved.

Each service page should include:

1. Unique H1 and concise explanation.
2. Relevant real project imagery where available.
3. What the service can cover, using only confirmed details.
4. What information the customer should provide when requesting a quote.
5. Related services.
6. A CTA to a preselected quote form (service prefilled).
7. Sensible metadata and internal links.

Do not give risky DIY electrical instructions. Avoid definitive claims about legal compliance or certification unless confirmed.

────────

9. OUR WORK (/our-work)

Create a premium portfolio/gallery focused on genuine CR Electrics work.

Design and functionality

• Strong page intro.
• Filter chips or tabs for confirmed categories such as Lighting, Consumer Units, Electrical Installations, EICR/Testing, and CCTV.
• Responsive masonry-like or carefully aligned grid layout; avoid unstable layout shifts.
• Image cards with consistent aspect ratios, deliberate crops, subtle hover interaction, accessible focus, and optional lightbox/modal for full-size images.
• Lightbox must support close button, Escape key, sensible focus handling, and mobile usability.
• Include a concise project description/caption only when it can be supported by the provided information.
• Provide a clear “Have a similar job?” CTA leading to the quote form.

Image/content rules

• Treat the user’s supplied Instagram screenshots/photos as reference material, not automatically as original image files of sufficient quality. Use original downloadable/exported images from the client when possible.
• Do not use screenshots containing Instagram interface elements as portfolio photos when clean original images can be obtained.
• Never fabricate a “before and after” pair.
• Never imply a stock image is a CR Electrics job.
• Do not show customer addresses, private information, or faces without permission.
• Add meaningful alt text that describes the visible work without making unsupported technical claims.
• Store project content in a typed data file or CMS-ready structure so new photos and captions can be added easily.

────────

10. REVIEWS (/reviews)

Create a dedicated, well-designed reviews page and homepage preview.

Required design

• Editorial page title and concise introduction.
• Responsive review cards or a clean list.
• Reviewer display name/handle, date, service context, review text, and source link only when these are genuinely available and approved.
• Optional Instagram source attribution/link where the original post is public.
• A strong CTA to enquire.
• Empty state must not appear on the public site. Until actual review data is provided, do not publish the page in navigation or sitemap; provide a polished, honest alternative or keep the route unpublished during development.


i have added all the reviews and testimonails images is the /reviews folder use them in the reviews page where needed.
────────

11. CONTACT / GET A QUOTE (/contact)

This is a critical conversion page. Design and validate it as carefully as the homepage.

Contact details

• Phone display: +44 07599 637166
• Email: cr.electrics@outlook.com
• WhatsApp: normalized URL https://wa.me/447599637166 after validation
• A direct email action should open a prefilled Gmail compose page where possible:
https://mail.google.com/mail/?view=cm&fs=1&to=cr.electrics%40outlook.com
Also provide a normal mailto:cr.electrics@outlook.com link as a fallback. Make clear this opens the visitor’s email workflow; do not claim that it sends automatically.
• Click-to-call uses a normalized tel: URI.
• No invented street address, map pin, office hours, or emergency availability.

Quote form fields

Build a professional, accessible form with:

• Full name — required.
• Email address — required, validated.
• Phone number — optional unless the client requests it as required.
• Service required — required dropdown, with options populated from confirmed services and an “Other / not sure” option.
• Postcode / area — required or optional according to client preference; initially optional.
• Preferred contact method — email / phone / WhatsApp (optional).
• Project details — required textarea with useful prompt text.
• Optional preferred timing — “Flexible,” “As soon as practical,” or “Planning ahead”; do not promise availability.
• Consent checkbox acknowledging the privacy notice — required if the form’s lawful basis and privacy wording are finalized.
• Clear inline validation and field-level error messages.
• Loading, success, and error states.
• Preserve user input after recoverable submission errors.
• Accessible labels, keyboard navigation, focus states, error announcements, and mobile-friendly input sizes.
• Honeypot field and basic rate limiting/spam protection for server submissions.
• Do not require image/file upload in the initial version unless it is properly implemented and secured.

Form behavior

On valid submit:

1. Client-side validation for usability.
2. POST structured JSON to a Next.js Route Handler, e.g. /api/quote.
3. Server validates and sanitizes input again.
4. Nodemailer sends the enquiry to cr.electrics@outlook.com (or a configured destination).
5. Send an appropriate success response only after successful email delivery.
6. Show a clear success state that confirms the enquiry was sent, without promising a reply time.
7. If email delivery fails, show a helpful error and give the user alternatives to call, WhatsApp, or email directly.
8. Do not expose SMTP credentials or private configuration to the browser.
9. Do not log full sensitive form contents unnecessarily.
10. Never fake a successful submission.

Email contents

Use a clear, branded plain-text and HTML email containing:

• “New website quote enquiry — CR Electrics”
• Submission timestamp with timezone handled sensibly.
• Name, email, phone if supplied, selected service, postcode/area if supplied, preferred contact method, timing, and project details.
• A reply-to address set to the customer’s validated email; never use the customer’s email as the SMTP from address.
• Escape all user-supplied content in HTML email output.
• Subject line must be sanitized to prevent header injection.
• Email sending failures must be handled without leaking credentials or stack traces to visitors.

SMTP configuration

Use Nodemailer with environment variables and document them in .env.example:

• SMTP_HOST
• SMTP_PORT
• SMTP_SECURE
• SMTP_USER
• SMTP_PASS
• QUOTE_TO_EMAIL=cr.electrics@outlook.com
• QUOTE_FROM_EMAIL (a sender address authorized by the configured SMTP provider)
• NEXT_PUBLIC_SITE_URL

Do not hardcode passwords, app passwords, tokens, or SMTP secrets. Outlook/Microsoft provider authentication rules may vary; document that valid SMTP credentials/provider configuration are required. Do not assume a normal Outlook account password will work. Do not commit .env.local.

Gmail contact action

In addition to the server-backed quote form, provide the direct Gmail compose action as described above, plus a mailto fallback. Label these accurately (“Email us” / “Open email”) rather than implying that clicking the link automatically sends a message.

API security and validation

• Implement /api/quote using a Next.js App Router Route Handler.
• Validate with a schema library if one already exists; otherwise add a small well-maintained validation library or robust server-side validation.
• Enforce reasonable maximum lengths for every field.
• Reject malformed email addresses, invalid service options, unexpected data types, oversized request bodies, and spam honeypot submissions.
• Add basic IP-aware rate limiting if a reliable deployment-compatible solution is available. Do not build a fragile in-memory rate limiter and claim it works across serverless instances. If external rate limiting is not configured, document the limitation and provide a clear extension point.
• Add safe cache headers and appropriate status codes.
• Do not return stack traces or SMTP errors to clients.
• Add CSRF/origin protections appropriate to the same-origin form architecture and hosting platform.
• Add a small unit or integration test for validation and the success/failure paths where feasible.

────────

12. TECHNICAL ARCHITECTURE

Required stack

• Next.js using the App Router.
• React.
• TypeScript.
• Tailwind CSS.
• react-icons/fa6.
• framer-motion.
• Node.js runtime for Nodemailer Route Handler.
• Nodemailer for email delivery.
• Next.js next/image for local/remote image optimization where suitable.

Structure

Use a clear, maintainable structure such as:

app/
  layout.tsx
  page.tsx
  about/page.tsx
  services/page.tsx
  services/[slug]/page.tsx
  our-work/page.tsx
  reviews/page.tsx
  contact/page.tsx
  privacy/page.tsx
  termsofservice/page.tsx
  api/quote/route.ts
components/
  layout/
    site-header.tsx
    site-footer.tsx
    mobile-navigation.tsx
    whatsapp-float.tsx
  home/
  services/
  portfolio/
  reviews/
  contact/
  ui/
lib/
  site-config.ts
  services.ts
  projects.ts
  reviews.ts
  validation.ts
  email.ts
  utils.ts
public/
  images/
    brand/
    projects/
    supporting/

Adapt this structure to the existing repository rather than duplicating folders or forcing it if the project already has a better convention. Use Server Components by default. Add "use client" only to interactive elements requiring client-side state, animations, or browser APIs.

Code quality

• Strong TypeScript types; avoid any unless truly unavoidable.
• Reusable components and design tokens.
• No giant monolithic page component.
• Centralized business/contact data.
• Clean semantic HTML.
• Correct React keys and no hydration errors.
• Avoid unnecessary dependencies.
• Use stable versions compatible with the existing Next.js setup.
• Keep server-only email logic out of client bundles.
• Provide readable comments for security-sensitive email behavior.
• No dead links or inert controls.
• No console errors, unhandled promises, or broken image paths.

Dependencies

Use the existing package manager and lockfile. Install only what is necessary. Use the requested framer-motion package unless the repository’s current architecture makes an existing compatible Motion package the better established choice; do not add both without reason.

────────

13. SEO, LOCAL DISCOVERY & SOCIAL SHARING

Implement:

• Unique metadata title and description per route.
• Canonical URL support based on NEXT_PUBLIC_SITE_URL.
• Open Graph and social-sharing metadata.
• A favicon/site icon based on the supplied logo where technically suitable.
• sitemap.ts and robots.ts with only public, real pages.
• Semantic heading hierarchy and descriptive link text.
• Image alt text.
• LocalBusiness / Electrician structured data only with verified business facts. Never invent street address, opening hours, geo coordinates, price range, or qualifications.
• Keep service area language accurate; initially use Liverpool and state that surrounding availability should be confirmed until the exact service area is supplied.
• Natural local SEO copy; no repeated city names or keyword stuffing.
• Add review structured data only when valid and compliant; do not mark up self-serving testimonials in ways that violate search-engine policies.
• Do not include draft/unapproved review pages in sitemap.

────────

14. ACCESSIBILITY & RESPONSIVE QUALITY

Meet WCAG 2.2 AA as the target:

• Sufficient contrast.
• Keyboard accessible navigation, accordions, modal/lightbox, and form.
• Visible focus styles.
• Proper labels and semantic controls.
• Descriptive alt text and decorative images marked appropriately.
• Respect reduced-motion preferences.
• Error messages announced to assistive technology.
• Do not communicate validation/status by colour alone.
• Adequate touch targets.
• No horizontal overflow at 320px viewport width.
• Test mobile navigation and the floating WhatsApp badge on small screens.
• Keep the footer and sticky elements from obscuring form controls.

Test at minimum:

• 320–375px mobile
• 390–430px mobile
• Tablet width
• 1280px desktop
• 1440px+ wide desktop

────────

15. PERFORMANCE & POLISH

• Use next/image for project imagery where suitable, with correct dimensions, responsive sizing, and sensible loading priorities.
• Optimize the hero image and avoid loading every portfolio image eagerly.
• Avoid layout shifts and oversized JavaScript bundles.
• Lazy-load below-the-fold media where appropriate.
• Use responsive image sizes and restrained animation.
• Aim for strong Core Web Vitals and Lighthouse scores; do not claim a score without measuring it.
• Check all images for broken URLs, licensing/usage suitability, and mobile cropping.
• Provide tasteful skeleton/loading states only where actual asynchronous loading requires them.
• No decorative loaders that delay content.
• Ensure buttons have hover, focus, active, disabled, and loading states as appropriate.
• Use consistent spacing, radii, borders, typography, and icon sizing.

────────

16. CONTENT & ASSET MANAGEMENT

Centralize business content so the developer can update it without searching through many components:

• Business name and contact details.
• Service areas.
• Confirmed services and service descriptions.
• Project images and captions.
• Approved testimonials and source URLs.
• Social links if the client supplies them.
• Credentials/registration details only after verification.
• FAQ answers.

Use the client’s supplied photos as references, and request clean original photos for final deployment. If original files are available in the project, use them; otherwise create a clear, documented asset manifest and do not point the production site to nonexistent paths.

For Unsplash:

• Use only relevant, professionally art-directed supporting imagery.
• Prefer images that fit the white/grey brand and UK residential context.
• Verify source URLs and image usage; use stable, valid sources.
• Never present a stock photo as an actual CR Electrics job or a photo of Connor.
• Avoid repeating the same stock photo across multiple sections.

────────

17. TESTING & ACCEPTANCE CRITERIA

The work is not complete until the following have been checked.

Pages and navigation

☐ Every required route renders successfully.
☐ Header, mobile navigation, footer, and CTAs work.
☐ No broken links, placeholder routes, or dead buttons.
☐ Active and hover states are consistent.
☐ Services and project cards link to correct destinations.

Design and content

☐ White/grey is the dominant palette; logo blue-grey is a restrained accent.
☐ Logo is displayed without distortion and has suitable contrast.
☐ Layout feels bespoke, consistent, premium, and clean.
☐ Mobile layouts have been reviewed carefully.
☐ All published service claims are confirmed.
☐ No fake testimonials, ratings, credentials, or portfolio projects.
☐ FAQ answers are honest and useful.
☐ Images have been checked for quality, cropping, accessibility, and provenance.

Form and email

☐ Required fields and dropdown options work.
☐ Client-side and server-side validation are both implemented.
☐ Invalid input is rejected safely.
☐ API sends email to the configured recipient when SMTP credentials are valid.
☐ Reply-to is set correctly and HTML content is escaped.
☐ Success only appears after email delivery succeeds.
☐ Failure state offers phone, WhatsApp, and email alternatives.
☐ Spam honeypot is implemented.
☐ No SMTP secrets are exposed to the client or committed.
☐ .env.example and setup instructions are provided.
☐ Gmail compose and mailto: links open correctly.
☐ WhatsApp URL and telephone link use correct normalized formats.

Engineering

☐ TypeScript passes.
☐ Lint passes.
☐ Production build passes.
☐ Browser console has no avoidable errors or hydration warnings.
☐ No horizontal overflow at small mobile widths.
☐ Reduced-motion and keyboard interactions are tested.
☐ SEO metadata, sitemap, robots, and structured data are valid.
☐ Privacy page matches actual data collection behavior.

Reporting

At the end, provide:

1. Summary of pages and features implemented.
2. Main design decisions and file/component architecture.
3. Exact commands used to run, lint, type-check, and build.
4. Environment variables that must be configured.
5. Any credentials, images, service details, review approvals, or client facts still needed.
6. Any incomplete functionality or deployment limitations.
7. A short manual test checklist for the client.
Do not state that email delivery, deployment, or any other integration is fully operational until it has actually been configured and tested.

────────

18. CLIENT CONTENT STILL TO CONFIRM

Keep the site honest and configurable until Connor confirms:

• Exact towns/postcodes served.
• Final list of services offered.
• Qualifications, memberships, registrations, and insurance that can be publicly displayed.
• Whether the business undertakes domestic, commercial, landlord, or other work.
• Approved business description/about story.
• Approved customer reviews and permission to republish each one.
• Original high-resolution project photos and permission to use them.
• Any official website/social links.
• Preferred SMTP provider/credentials and authorized sender address.
• Whether phone is required on the quote form.
• Privacy contact/legal business identity for the privacy notice.

Do not block implementation of the overall design while awaiting these facts. Build configurable content architecture, publish only verified information, and keep unconfirmed claims out of public-facing content.

────────

19. FINAL EXECUTION DIRECTIVE

Now inspect the repository and available skills, then build the complete CR Electrics website using the above requirements. Prioritize visual excellence, useful content, accessibility, mobile polish, and a reliable quote-enquiry flow. Make thoughtful design decisions without asking unnecessary questions, but never fabricate business facts.

Use the supplied logo and genuine installation material, create all required pages and reusable components, wire every interaction, implement the email API securely, document environment setup, and run the project’s checks. If a real integration cannot be completed without credentials, finish the code and report the exact configuration needed rather than pretending it works.

The final result should feel like a premium independent design studio delivered it: distinctive, credible, fast, responsive, accessible, and built to turn visitors into real enquiries.