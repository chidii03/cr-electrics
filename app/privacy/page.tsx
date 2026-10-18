import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How CR Electrics uses information submitted through this website's quote enquiry form.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="container legal-page">
      <p className="eyebrow">Website information</p>
      <h1>
        Privacy <em>notice.</em>
      </h1>
      <p className="legal-updated">Last reviewed: 17 October 2026</p>
      <h2>Who receives your enquiry</h2>
      <p>
        This website is for CR Electrics, a Liverpool-based electrical business.
        The contact for privacy questions is{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. The legal
        identity and data-controller details should be confirmed by the business
        before launch.
      </p>
      <h2>Information collected</h2>
      <p>
        If you use the quote form, it collects your name, email address,
        optional telephone number, service enquiry, optional area, contact
        preference, preferred timing and project details. The website does not
        accept image uploads.
      </p>
      <h2>Why it is used</h2>
      <p>
        Information is used to review and respond to your enquiry. Form
        submissions are sent by email to the configured CR Electrics recipient.
        The site does not claim to send a reply within a particular time.
      </p>
      <h2>How long it is kept</h2>
      <p>
        Retention periods and the process for deleting enquiries must be
        confirmed and configured by CR Electrics. Please contact the email above
        with a data request.
      </p>
      <h2>Service providers and security</h2>
      <p>
        Website hosting and the configured email provider may process enquiry
        information to deliver the service. SMTP credentials are stored only in
        server environment variables. The business should update this notice if
        its provider or practices change.
      </p>
      <h2>Your choices</h2>
      <p>
        You can contact CR Electrics to ask about, correct or request deletion
        of information submitted through the form. The business should confirm
        its lawful basis and complete controller details before accepting live
        enquiries.
      </p>
    </article>
  );
}
