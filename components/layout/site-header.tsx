"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaXmark, FaArrowRight } from "react-icons/fa6";
import { logoImage } from "@/lib/images";
import { navLinks } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const links = navLinks.map((link, index) => (
    <Link
      key={link.href}
      ref={index === 0 ? firstLinkRef : undefined}
      href={link.href}
      onClick={() => setOpen(false)}
      aria-current={pathname === link.href ? "page" : undefined}
      className={`nav-link ${pathname === link.href ? "nav-link-active" : ""}`}
    >{link.label}</Link>
  ));

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-lockup" aria-label="CR Electrics home">
          <Image src={logoImage} alt="" priority className="brand-logo" />
          <span className="brand-name">CR <span>Electrics</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">{links}</nav>
        <Link className="button button-dark header-cta" href="/contact">Get a quote <FaArrowRight aria-hidden="true" /></Link>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >{open ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}</button>
      </div>
      <div id="mobile-navigation" className={`mobile-nav-wrap ${open ? "is-open" : ""}`} hidden={!open} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <button className="mobile-nav-close" type="button" onClick={() => { setOpen(false); toggleRef.current?.focus(); }} aria-label="Close navigation menu"><FaXmark aria-hidden="true" /></button>
          {links}
          <Link href="/contact" className="button button-dark mobile-quote" onClick={() => setOpen(false)}>Get a quote <FaArrowRight aria-hidden="true" /></Link>
        </nav>
      </div>
    </header>
  );
}
