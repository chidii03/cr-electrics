import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ui/service-card";

export const metadata = {
  title: "Electrical services",
  description:
    "Explore electrical service enquiries listed in the CR Electrics supplied business and project material.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> Services
            </p>
            <h1>
              Electrical work,
              <br />
              <em>thought through.</em>
            </h1>
          </div>
          <p>
            Explore the types of work referenced in the information supplied for
            CR Electrics. Get in touch to confirm whether your specific project
            and area can be supported.
          </p>
        </div>
      </section>
      <section className="section services-section">
        <div className="container">
          <div className="service-grid service-grid-page">
            {services.filter((service) => service.slug !== "spotlights").map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
          <div className="service-note">
            <p>
              Service details are starting points for a conversation. Scope and
              availability are confirmed for each enquiry.
            </p>
            <Link className="button button-dark" href="/contact">
              Tell us about your job <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
