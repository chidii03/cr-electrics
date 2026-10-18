import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { ToastProvider } from "@/components/ui/toast-provider";
import { siteConfig } from "@/lib/site-config";
import { logoImage } from "@/lib/images";
import "./global.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "CR Electrics | Electrical work in Liverpool",
    template: "%s | CR Electrics",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: siteConfig.name,
    title: "CR Electrics | Electrical work in Liverpool",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "CR Electrics",
    description: siteConfig.description,
  },
  icons: { icon: logoImage.src },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
        <ToastProvider />
      </body>
    </html>
  );
}
