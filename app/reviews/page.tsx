import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { ReviewWall } from "@/components/ui/review-wall";
import { reviewImages } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Customer posts & supplied material",
  description:
    "View original customer and project posts supplied by CR Electrics, without added or altered testimonials.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> Customer posts
            </p>
            <h1>
              Words from
              <br />
              <em>customers.</em>
            </h1>
          </div>
          <p>
            Browse the customer and project screenshots supplied for CR
            Electrics. The original words and context remain visible; nothing
            has been rewritten as a testimonial.
          </p>
        </div>
      </section>
      <section className="section reviews-section">
        <div className="container reviews-intro">
          <p className="eyebrow">Shared material</p>
          <h2>Real posts, presented with more care.</h2>
          <p>
            Each card keeps the source image intact, while gentle movement makes
            the collection easier to browse. Details visible in screenshots are
            not independently verified.
          </p>
        </div>
        <div className="container">
          <ReviewWall images={reviewImages} />
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div>
            <p className="eyebrow">Enquiries welcome</p>
            <h2>
              Have a job in
              <br />
              <em>mind?</em>
            </h2>
          </div>
          <Link className="button button-light" href="/contact">
            Get in touch <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
