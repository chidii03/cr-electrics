import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { ProjectGrid } from "@/components/ui/project-grid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "A selection of electrical and lighting work shown in material supplied by CR Electrics.",
  alternates: { canonical: "/our-work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> Our work
            </p>
            <h1>
              A look at the
              <br />
              <em>work itself.</em>
            </h1>
          </div>
          <p>
            Explore practical ideas for lighting, power and security projects.
            These are illustrative references, not claimed CR Electrics jobs;
            send your own photos or plans to start a conversation about yours.
          </p>
        </div>
      </section>
      <section className="section gallery-section">
        <div className="container">
          <div className="work-intro"><span>Project thinking</span><p>Every space begins with a problem to solve: better light, more useful power, more confidence outside, or a setup that suits how you live.</p></div>
          <ProjectGrid items={projects} detailed />
          <p className="gallery-caption">
            The ideas above are intended to make an enquiry easier. Final scope,
            availability and quotation are always discussed for your property.
          </p>
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div>
            <p className="eyebrow">Have a similar job?</p>
            <h2>
              Let’s talk about
              <br />
              <em>your project.</em>
            </h2>
          </div>
          <Link className="button button-light" href="/contact">
            Tell us what you need <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
