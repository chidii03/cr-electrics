import type { Metadata } from "next";
import { Suspense } from "react";
import {
  FaArrowUpRightFromSquare,
  FaArrowDown,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { QuoteForm } from "@/components/contact/quote-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & get a quote",
  description:
    "Contact CR Electrics in Liverpool or send a quote enquiry with details about your electrical project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}`;
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> Contact CR Electrics
            </p>
            <h1>
              Tell us what
              <br />
              <em>you have in mind.</em>
            </h1>
          </div>
          <p>
            A few details about the work will help us understand your enquiry.
            We’ll review it and discuss suitable next steps with you.
          </p>
          <a className="contact-scroll-cue" href="#contact-form">
            Start your enquiry <FaArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-details">
            <p className="eyebrow">Direct contact</p>
            <h2>
              Choose what works
              <br />
              for you.
            </h2>
            <p>
              Based in Liverpool; get in touch to confirm availability in your
              area.
            </p>
            <a className="contact-option" href={`tel:${siteConfig.phoneHref}`}>
              <span>
                <FaPhone />
              </span>
              <div>
                <small>Call CR Electrics</small>
                <strong>{siteConfig.phoneDisplay}</strong>
              </div>
              <FaArrowUpRightFromSquare className="contact-arrow" />
            </a>
            <a
              className="contact-option"
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <FaWhatsapp />
              </span>
              <div>
                <small>WhatsApp</small>
                <strong>Send a message</strong>
              </div>
              <FaArrowUpRightFromSquare className="contact-arrow" />
            </a>
            <div className="contact-option contact-email">
              <span>
                <FaEnvelope />
              </span>
              <div>
                <small>Email CR Electrics</small>
                <strong>{siteConfig.email}</strong>
                <div className="email-actions">
                  <a href={gmail} target="_blank" rel="noreferrer">
                    Open Gmail <FaArrowUpRightFromSquare />
                  </a>
                  <a href={`mailto:${siteConfig.email}`}>Open email app</a>
                </div>
              </div>
            </div>
            <div className="contact-note">
              <strong>Helpful details to include</strong>
              <p>
                What work you need, your postcode or area, any useful photos
                (send separately by email or WhatsApp), and your preferred
                timing.
              </p>
            </div>
          </div>
          <div className="form-panel" id="contact-form">
            <div className="form-panel-heading">
              <p className="eyebrow">Quote enquiry</p>
              <h2>Start with the basics.</h2>
              <p>
                Fields marked with an asterisk are required. No file upload is
                needed.
              </p>
            </div>
            <Suspense fallback={<p>Loading the enquiry form…</p>}>
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
