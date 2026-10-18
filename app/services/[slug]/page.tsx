import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { services, getService } from "@/lib/services";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.intro,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);
  return (
    <>
      <section className="page-hero service-detail-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">
              <Link href="/services">Services</Link>
              <span>/</span> CR Electrics
            </p>
            <h1>
              {service.title.split(" ").slice(0, -1).join(" ")}
              <br />
              <em>{service.title.split(" ").slice(-1)}</em>
            </h1>
          </div>
          <p>{service.intro}</p>
        </div>
      </section>
      <section className="section detail-content">
        <div className="container detail-grid">
          <div className="detail-image">
            <Image
              src={service.image}
              fill
              alt={`Illustrative image for ${service.title.toLowerCase()}`}
              sizes="(max-width: 760px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div>
            <p className="eyebrow">Discuss your requirements</p>
            <h2>Start with the details of your project.</h2>
            <p>{service.detail}</p>
            <div className="detail-checks">
              <p>
                <FaCheck /> Describe the work you have in mind
              </p>
              <p>
                <FaCheck /> Include your postcode or area
              </p>
              <p>
                <FaCheck /> Share any useful context or photos by email or
                WhatsApp
              </p>
            </div>
            <Link
              className="button button-dark"
              href={`/contact?service=${encodeURIComponent(service.title)}`}
            >
              Enquire about this service <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="section related-section">
        <div className="container">
          <div className="split-heading">
            <div>
              <p className="eyebrow">More from CR Electrics</p>
              <h2>Related services.</h2>
            </div>
            <Link className="text-link" href="/services">
              View all services <FaArrowRight />
            </Link>
          </div>
          <div className="service-grid">
            {related.map((item, index) => (
              <article key={item.slug} className="related-card">
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.short}</p>
                <Link className="text-link" href={`/services/${item.slug}`}>
                  Explore service <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
