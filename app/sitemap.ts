import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/our-work",
    "/reviews",
    "/contact",
    "/privacy",
    "/terms-of-service",
    "/cookie-policy",
  ];
  return [
    ...routes.map((route) => ({
      url: `${siteConfig.siteUrl}${route}`,
      lastModified: new Date(),
    })),
    ...services.map(({ slug }) => ({
      url: `${siteConfig.siteUrl}/services/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
