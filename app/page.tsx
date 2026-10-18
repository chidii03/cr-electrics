import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCheck,
  FaPhone,
} from "react-icons/fa6";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";
import { ServiceCard } from "@/components/ui/service-card";
import { ProjectGrid } from "@/components/ui/project-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { Faq, type FaqItem } from "@/components/ui/faq";

const faqs: FaqItem[] = [
  {
    question: "What areas does CR Electrics cover?",
    answer:
      "CR Electrics is based in Liverpool. Contact us with your postcode to confirm whether your area can be covered.",
  },
  {
    question: "What electrical services do you offer?",
    answer:
      "The supplied business information references lighting, power and electrical installations, consumer units, EICR and testing, and CCTV. Please contact us to confirm your specific requirements.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "Use the quote form on our contact page, call, or send a message on WhatsApp. Include the type of work, your area and any useful details.",
  },
  {
    question: "Can I send photos of the work I need?",
    answer:
      "Yes. You can share photos when contacting us by email or WhatsApp. The website form does not accept file uploads.",
  },
  {
    question: "Do you carry out consumer-unit or fuseboard upgrades?",
    answer:
      "Consumer-unit and fuseboard work appears in the supplied project material. Contact us so we can discuss the property and confirm the scope.",
  },
  {
    question: "Can I enquire about an EICR or electrical testing?",
    answer:
      "EICR and testing work appears in the supplied material. Get in touch with details about the property and what you need to establish suitability.",
  },
  {
    question: "Do you install internal and external lighting?",
    answer:
      "The supplied business profile references internal and external lighting. Share a few details about your project to discuss it further.",
  },
  {
    question: "Do you provide CCTV installation?",
    answer:
      "CCTV is listed in the supplied business profile. Contact us to confirm your requirements and area.",
  },
  {
    question: "How can I contact CR Electrics?",
    answer:
      "Call {phone}, email {email}, use WhatsApp, or send an enquiry through the quote form."
        .replace("{phone}", siteConfig.phoneDisplay)
        .replace("{email}", siteConfig.email),
  },
  {
    question: "How soon can the work be arranged?",
    answer:
      "Timing depends on the job and availability. We can discuss possible next steps after reviewing your enquiry; no response or completion time is promised here.",
  },
];

export const metadata = {
  title: "Electrical work, done properly",
  description:
    "Discuss lighting, electrical installations, consumer units, EICR and CCTV enquiries with CR Electrics in Liverpool.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" /> Electrical work in Liverpool
            </p>
            <h1>
              Electrical work,
              <br />
              <em>done properly.</em>
            </h1>
            <p className="hero-lede">
              Thoughtful electrical work for the places you live and work. Tell
              us what you have in mind and we’ll talk through the next steps.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/contact">
                Get a quote <FaArrowRight aria-hidden="true" />
              </Link>
              <Link className="text-link" href="/our-work">
                View our work <FaArrowUpRightFromSquare aria-hidden="true" />
              </Link>
            </div>
            <div className="hero-caption">
              <span className="caption-dot" /> Based in Liverpool{" "}
              <span className="caption-divider">/</span> Availability by area
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame hero-stock-image">
              <Image
              src="https://images.unsplash.com/photo-1780034766312-73825064806c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Warm pendant light in a contemporary home interior; illustrative stock photography"
                fill
                priority
                sizes="(max-width: 850px) 100vw, 54vw"
                unoptimized
              />
            </div>
            <div className="hero-image-note">
              <span className="note-index">01</span>
              <span>
                Lighting inspiration
                <br />
                <strong>Illustrative image</strong>
              </span>
              <Link
                href="/our-work"
                aria-label="Explore CR Electrics project images"
              >
                <FaArrowUpRightFromSquare />
              </Link>
            </div>
            <div className="hero-vertical-label">CR ELECTRICS · LIVERPOOL</div>
          </div>
        </div>
      </section>
      <section className="proof-strip">
        <div className="container proof-inner">
          <p>Good work starts with a clear conversation.</p>
          <div>
            <span>
              <FaCheck /> Clear quote enquiries
            </span>
            <span>
              <FaCheck /> Work discussed for your property
            </span>
            <span>
              <FaCheck /> Direct contact with CR Electrics
            </span>
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Electrical work for real life."
            body="A considered starting point for projects around your property. Tell us what you need and we’ll confirm whether it’s a good fit."
          />
          <div className="service-grid">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
          <div className="section-footnote">
            <span>
              Service scope and availability are confirmed for each enquiry.
            </span>
            <Link className="text-link" href="/services">
              See all services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="section work-section">
        <div className="container">
          <div className="split-heading">
            <SectionHeading
              eyebrow="A look at the work"
              title="Made for the space it serves."
              body="A few ways lighting and power can support the spaces you use every day."
            />
            <Link className="button button-outline" href="/our-work">
              Explore the work <FaArrowRight />
            </Link>
          </div>
          <ProjectGrid items={projects.slice(0, 6)} />
        </div>
      </section>
      <section className="section approach-section">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow">The CR approach</p>
            <h2>
              Good communication.
              <br />
              <em>Careful consideration.</em>
            </h2>
            <p className="approach-lede">
              Every property and project is different. We start by understanding
              what you need, then discuss sensible next steps for the work.
            </p>
            <Link className="text-link" href="/about">
              A little about CR Electrics <FaArrowRight />
            </Link>
          </div>
          <div className="approach-points">
            <article>
              <span><b>01</b></span>
              <div>
                <h3>Talk it through</h3>
                <p>
                  Share the details that matter: what you need, where the work
                  is and any timing you have in mind.
                </p>
              </div>
            </article>
            <article>
              <span><b>02</b></span>
              <div>
                <h3>Understand the job</h3>
                <p>
                  We review your enquiry and follow up to clarify the scope
                  where needed.
                </p>
              </div>
            </article>
            <article>
              <span><b>03</b></span>
              <div>
                <h3>Agree next steps</h3>
                <p>
                  We discuss a quotation and any scheduling by agreement, once
                  the requirements are clear.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section review-preview">
        <div className="container review-preview-inner">
          <div>
            <p className="eyebrow">From the supplied material</p>
            <h2>
              Work and messages
              <br />
              shared along the way.
            </h2>
            <p>
              See client-supplied Instagram posts and project material. Review
              text and public attribution are shown only where visible in the
              original images.
            </p>
            <Link className="text-link" href="/reviews">
              See supplied posts <FaArrowRight />
            </Link>
          </div>
          <div className="review-preview-image">
            <Image
              src="https://images.unsplash.com/photo-1660330589693-99889d60181e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Illustrative electrical installation work"
              width={1000}
              height={1200}
              sizes="(max-width: 800px) 100vw, 44vw"
              unoptimized
            />
          </div>
        </div>
      </section>
      <section className="section process-section">
        <div className="container">
          <SectionHeading
            eyebrow="A straightforward process"
            title="From first message to agreed work."
            body="A clear, practical way to begin. Timing and suitability are discussed after we understand the job."
          />
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Tell us what you need</h3>
              <p>
                Use the quote form, call or WhatsApp. A few details help us
                understand the project.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>We review the enquiry</h3>
              <p>
                We may get in touch to clarify the property, location or scope
                of work.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Discuss a quotation</h3>
              <p>
                Where appropriate, we’ll talk through a quotation and the
                proposed next steps.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Arrange by agreement</h3>
              <p>
                If you’d like to proceed, timing is arranged together once
                details are agreed.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section faq-section">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">Useful to know</p>
            <h2>
              A few things you
              <br />
              might be wondering.
            </h2>
            <p>
              Can’t find your answer? Get in touch and tell us a little about
              the job.
            </p>
            <Link className="text-link" href="/contact">
              Ask us directly <FaArrowRight />
            </Link>
          </div>
          <Faq items={faqs} />
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>
              Tell us about your
              <br />
              <em>electrical project.</em>
            </h2>
            <p>Send a few details and we’ll discuss the right next step.</p>
          </div>
          <div className="closing-actions">
            <Link className="button button-light" href="/contact">
              Get a quote <FaArrowRight />
            </Link>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="button button-transparent"
            >
              <FaPhone /> Call CR Electrics
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
