"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { getProjectImage } from "@/lib/images";

export function ReviewWall({ images }: { images: string[] }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="reviews-grid">
      {images.map((image, index) => (
        <motion.article
          className="review-image-card"
          key={image}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.42, delay: (index % 4) * 0.05 }}
          whileHover={reduceMotion ? undefined : { y: -6 }}
        >
          <div className="review-image">
            <Image
              src={getProjectImage(image)}
              alt={`Customer or project post screenshot ${index + 1}, supplied by CR Electrics`}
              sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 25vw"
            />
          </div>
          <p>
            Supplied customer or project post <span>·</span>{" "}
            {String(index + 1).padStart(2, "0")}
          </p>
        </motion.article>
      ))}
    </div>
  );
}
