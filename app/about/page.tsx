import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "About CR Electrics",
  description:
    "Learn about CR Electrics, a Liverpool-based electrical business, and how to discuss a project.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> About CR Electrics
            </p>
            <h1>
              Good work starts
              <br />
              with <em>understanding.</em>
            </h1>
          </div>
          <p>
            CR Electrics is a Liverpool-based electrical business. We work
            across lighting, power and related electrical projects, with the
            right scope and availability confirmed through a direct
            conversation.
          </p>
        </div>
      </section>
      <section className="section about-story">
        <div className="container about-grid">
          <div className="about-photo">
            <Image
              src={projects[0].image}
              width={1000}
              height={1200}
              alt={projects[0].alt}
              sizes="(max-width: 760px) 100vw, 48vw"
              unoptimized
            />
          </div>
          <div>
            <p className="eyebrow">A practical approach</p>
            <h2>Every job has its own context.</h2>
            <p>
              That’s why the first step is a clear conversation about the
              property, the work you have in mind and any details that could
              shape the project.
            </p>
            <p>
              CR Electrics’ supplied work and profile include lighting, power
              installations, consumer units, electrical testing and CCTV. The
              specific services available for your project and location should
              be confirmed directly.
            </p>
            <Link className="text-link" href="/contact">
              Talk about your project <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="section values-section">
        <div className="container">
          <SectionHeading
            eyebrow="How we work"
            title="Clear, considered, and agreed together."
            body="A useful enquiry begins with the facts of the job. From there, we can talk through what may be involved."
          />
          <div className="values-grid">
            <article>
              <span>01 / COMMUNICATION</span>
              <h3>Keep things clear.</h3>
              <p>
                We make space to understand your requirements and discuss what
                happens next.
              </p>
            </article>
            <article>
              <span>02 / PLANNING</span>
              <h3>Consider the property.</h3>
              <p>
                The location, existing setup and intended result all matter when
                shaping a project.
              </p>
            </article>
            <article>
              <span>03 / AGREEMENT</span>
              <h3>Decide with the details.</h3>
              <p>
                Scope, quotation and timing are discussed before work is
                arranged.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section about-services">
        <div className="container">
          <div className="split-heading">
            <SectionHeading
              eyebrow="Areas of work"
              title="Start with the work you have in mind."
              body="These areas appear in the material supplied for CR Electrics. Contact us to confirm your specific job."
            />
            <Link className="text-link" href="/services">
              All services <FaArrowRight />
            </Link>
          </div>
          <div className="service-grid">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>
              Have a project
              <br />
              <em>in mind?</em>
            </h2>
          </div>
          <Link className="button button-light" href="/contact">
            Request a quote <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
