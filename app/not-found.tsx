import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">
          <span className="eyebrow-line" /> Page not found
        </p>
        <p className="not-found-code">404</p>
        <h1>
          This route has
          <br />
          <em>gone quiet.</em>
        </h1>
        <p>
          The page you were looking for may have moved, or the link may not be
          quite right. Let&apos;s get you back to something useful.
        </p>
        <div>
          <Link href="/" className="button button-dark">
            <FaArrowLeft /> Back home
          </Link>
          <Link href="/contact" className="text-link">
            Get in touch <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
