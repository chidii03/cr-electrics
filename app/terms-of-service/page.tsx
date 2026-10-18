import type { Metadata } from "next";

export const metadata: Metadata = { title: "Website terms", description: "Terms for using the CR Electrics website and quote enquiry form.", alternates: { canonical: "/terms-of-service" } };

export default function TermsPage() {
  return <article className="container legal-page"><p className="eyebrow">Website information</p><h1>Website <em>terms.</em></h1><p>Information on this website is a general introduction to the types of electrical work referenced in material supplied for CR Electrics. It is not a quotation, technical assessment or confirmation that a particular service, location or project is available.</p><h2>Project enquiries</h2><p>Submitting an enquiry does not book work or create an agreement. Scope, suitability, quotation and scheduling are discussed directly and agreed before work proceeds.</p><h2>Images and content</h2><p>Images are supplied by CR Electrics. Some are social-media screenshots and may contain platform interface elements. Content should not be reused without the relevant permission.</p><h2>Contact</h2><p>For website questions, contact CR Electrics by email at cr.electrics@outlook.com.</p></article>;
}
