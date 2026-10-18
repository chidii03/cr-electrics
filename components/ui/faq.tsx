"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export type FaqItem = { question: string; answer: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [active, setActive] = useState<number | null>(0);
  return <div className="faq-list">{items.map((item, index) => <section className="faq-item" key={item.question}><h3><button type="button" aria-expanded={active === index} aria-controls={`faq-panel-${index}`} onClick={() => setActive(active === index ? null : index)}>{item.question}<FaPlus aria-hidden="true" className={active === index ? "faq-plus is-active" : "faq-plus"} /></button></h3><div id={`faq-panel-${index}`} className="faq-panel" hidden={active !== index}><p>{item.answer}</p></div></section>)}</div>;
}
