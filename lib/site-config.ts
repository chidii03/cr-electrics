export const siteConfig = {
  name: "CR Electrics",
  description: "Electrical work, installations and testing from CR Electrics in Liverpool. Contact us to discuss your project and confirm availability in your area.",
  phoneDisplay: "+44 07599 637166",
  phoneHref: "+447599637166",
  email: "cr.electrics@outlook.com",
  whatsapp: "https://wa.me/447599637166?text=Hi%20CR%20Electrics%2C%20I%E2%80%99d%20like%20to%20enquire%20about%20an%20electrical%20job.%20Could%20you%20please%20advise%20on%20the%20next%20steps%3F",
  instagram: "https://www.instagram.com/cr.electrics_liverpool?mdxt=MThmc3owZDV0d2F4aw==",
  facebook: "https://www.facebook.com/profile.php?id=100090236060536&mibextid=wwXIfr",
  tiktok: "https://www.tiktok.com/@cr.electrics?_r=1&_t=ZS-9AdfAZXFUgb",
  serviceArea: "Based in Liverpool; contact us to confirm availability in your area.",
  get siteUrl() {
    return (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
  }
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our work", href: "/our-work" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" }
] as const;
