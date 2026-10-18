import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact CR Electrics on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
