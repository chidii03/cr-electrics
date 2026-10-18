import Image from "next/image";
import Link from "next/link";
import {
  FaArrowUpRightFromSquare,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa6";
import { logoImage } from "@/lib/images";
import { navLinks, siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand-lockup">
            <Image src={logoImage} alt="" className="brand-logo" />
            <span className="brand-name">
              CR <span>Electrics</span>
            </span>
          </Link>
          <p>
            Electrical installations, lighting and related work from a
            Liverpool-based business.
          </p>
          <p className="footer-area">{siteConfig.serviceArea}</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms-of-service">Terms</Link>
          <Link href="/cookie-policy">Cookie policy</Link>
        </div>
        <div className="footer-column">
          <h2>Services</h2>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              {service.title}
            </Link>
          ))}
        </div>
        <div className="footer-column footer-contact">
          <h2>Get in touch</h2>
          <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
          <div className="social-links" aria-label="Social media links">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href={siteConfig.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} CR Electrics</span>
        <span>Electrical work, considered carefully.</span>
      </div>
    </footer>
  );
}
