type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: Props) {
  return (
    <div
      className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p className="section-intro">{body}</p>}
    </div>
  );
}
