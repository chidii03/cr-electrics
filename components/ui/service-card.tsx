import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare, FaBolt, FaCamera, FaLightbulb, FaGauge, FaClipboardCheck } from "react-icons/fa6";
import type { Service } from "@/lib/services";

const icons = { light: FaLightbulb, bolt: FaBolt, panel: FaGauge, test: FaClipboardCheck, camera: FaCamera };

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = icons[service.icon];
  return <Link href={`/services/${service.slug}`} className="service-card" style={{ "--card-index": index } as React.CSSProperties}>
    <Image className="service-card-image" src={service.image} alt="" fill sizes="(max-width: 760px) 50vw, 33vw" unoptimized />
    <span className="service-card-scrim" />
    <span className="service-icon"><Icon aria-hidden="true" /></span><span className="service-number">{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><p>{service.short}</p><span className="card-link">Explore service <FaArrowUpRightFromSquare aria-hidden="true" /></span>
  </Link>;
}
