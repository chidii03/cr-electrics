"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { FaArrowRight, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

type FormValues = { name: string; email: string; phone: string; service: string; area: string; contactMethod: string; timing: string; details: string; website: string };
const initialValues: FormValues = { name: "", email: "", phone: "", service: "", area: "", contactMethod: "", timing: "Flexible", details: "", website: "" };

export function QuoteForm() {
  const searchParams = useSearchParams();
  const queryService = searchParams.get("service") ?? "";
  const [values, setValues] = useState<FormValues>({ ...initialValues, service: services.some((item) => item.title === queryService) ? queryService : "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setValues((current) => ({ ...current, [event.target.name]: event.target.value }));

  function validate() {
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "Enter a valid email address.";
    if (!values.service) next.service = "Choose a service or select ‘Other / not sure’.";
    if (values.details.trim().length < 10) next.details = "Please add a little more detail (at least 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const response = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      if (!response.ok) throw new Error("Quote request could not be delivered");
      setStatus("success");
      toast.success("Your enquiry was sent to CR Electrics.");
      setValues(initialValues);
      setErrors({});
    } catch {
      setStatus("error");
      toast.error("Your enquiry could not be sent. Your details are still here.");
    }
  }

  if (status === "success") return <div className="form-status form-success" role="status" aria-live="polite"><span className="status-mark">✓</span><h2>Enquiry sent.</h2><p>Thank you for contacting CR Electrics. Your message was delivered successfully.</p><button type="button" className="text-link" onClick={() => setStatus("idle")}>Send another enquiry <FaArrowRight /></button></div>;

  const fieldClass = (name: string) => `form-control ${errors[name] ? "has-error" : ""}`;
  return <form className="quote-form" onSubmit={submit} noValidate>
    {status === "error" && <div className="form-status form-error" role="alert"><strong>Your enquiry could not be sent.</strong><p>Your details are still here. Please try again, or contact us directly.</p><div className="form-alternatives"><a href={`tel:${siteConfig.phoneHref}`}><FaPhone /> Call</a><a href={siteConfig.whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp</a><a href={`mailto:${siteConfig.email}`}><FaEnvelope /> Email</a></div></div>}
    <div className="form-row"><label className="form-field"><span>Full name <b aria-hidden="true">*</b></span><input className={fieldClass("name")} name="name" autoComplete="name" required maxLength={100} value={values.name} onChange={update} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <small id="name-error">{errors.name}</small>}</label><label className="form-field"><span>Email address <b aria-hidden="true">*</b></span><input className={fieldClass("email")} type="email" name="email" autoComplete="email" required maxLength={254} value={values.email} onChange={update} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <small id="email-error">{errors.email}</small>}</label></div>
    <div className="form-row"><label className="form-field"><span>Phone number <em>Optional</em></span><input className="form-control" type="tel" name="phone" autoComplete="tel" maxLength={40} value={values.phone} onChange={update} /></label><label className="form-field"><span>Service required <b aria-hidden="true">*</b></span><select className={fieldClass("service")} name="service" required value={values.service} onChange={update} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined}><option value="">Choose a service</option>{services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}<option>Other / not sure</option></select>{errors.service && <small id="service-error">{errors.service}</small>}</label></div>
    <div className="form-row"><label className="form-field"><span>Postcode or area <em>Optional</em></span><input className="form-control" name="area" autoComplete="postal-code" maxLength={100} value={values.area} onChange={update} /></label><label className="form-field"><span>Preferred contact method <em>Optional</em></span><select className="form-control" name="contactMethod" value={values.contactMethod} onChange={update}><option value="">No preference</option><option>Email</option><option>Phone</option><option>WhatsApp</option></select></label></div>
    <label className="form-field"><span>Preferred timing <em>Optional</em></span><select className="form-control" name="timing" value={values.timing} onChange={update}><option>Flexible</option><option>As soon as practical</option><option>Planning ahead</option></select><small>Timing is subject to discussion and availability.</small></label>
    <label className="form-field"><span>Tell us about the work <b aria-hidden="true">*</b></span><textarea className={fieldClass("details")} name="details" required minLength={10} maxLength={4000} rows={6} placeholder="What would you like done? Include any helpful details about the property or project." value={values.details} onChange={update} aria-invalid={Boolean(errors.details)} aria-describedby={errors.details ? "details-error" : undefined} />{errors.details && <small id="details-error">{errors.details}</small>}</label>
    <div className="honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} /></div>
    <p className="privacy-note">By submitting, you agree that CR Electrics can use these details to respond to your enquiry. Read our <Link href="/privacy">privacy notice</Link>.</p>
    <button className="button button-dark form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending enquiry…" : <>Send enquiry <FaArrowRight aria-hidden="true" /></>}</button>
    <p className="form-required-note"><b aria-hidden="true">*</b> Required fields</p>
  </form>;
}
