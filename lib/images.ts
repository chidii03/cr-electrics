import type { StaticImageData } from "next/image";
import logo from "@/app/public/logo.png";
import review1 from "@/app/public/reviews/review1.jpeg";
import review2 from "@/app/public/reviews/review2.jpeg";
import review3 from "@/app/public/reviews/review3.jpeg";
import review4 from "@/app/public/reviews/review4.jpeg";
import review5 from "@/app/public/reviews/review5.jpeg";
import review6 from "@/app/public/reviews/review6.jpeg";
import review7 from "@/app/public/reviews/review7.jpeg";
import review8 from "@/app/public/reviews/review8.jpeg";
import review9 from "@/app/public/reviews/review9.jpeg";
import review10 from "@/app/public/reviews/review10.jpeg";
import review11 from "@/app/public/reviews/review11.jpeg";
import review12 from "@/app/public/reviews/review12.jpeg";
import review13 from "@/app/public/reviews/review13.jpeg";
import review14 from "@/app/public/reviews/review14.jpeg";
import review15 from "@/app/public/reviews/review15.jpeg";
import review16 from "@/app/public/reviews/review16.jpeg";
import review17 from "@/app/public/reviews/review17.jpeg";
import review18 from "@/app/public/reviews/review18.jpeg";
import review19 from "@/app/public/reviews/review19.jpeg";
import review20 from "@/app/public/reviews/review20.jpeg";
import review21 from "@/app/public/reviews/review21.jpeg";
import review22 from "@/app/public/reviews/review22.jpeg";
import review23 from "@/app/public/reviews/review23.jpeg";
import review24 from "@/app/public/reviews/review24.jpeg";
import review25 from "@/app/public/reviews/review25.jpeg";
import review26 from "@/app/public/reviews/review26.jpeg";
import review27 from "@/app/public/reviews/review27.jpeg";
import review28 from "@/app/public/reviews/review28.jpeg";
import review29 from "@/app/public/reviews/review29.jpeg";
import review30 from "@/app/public/reviews/review30.jpeg";
import review31 from "@/app/public/reviews/review31.jpeg";
import review32 from "@/app/public/reviews/review32.jpeg";
import review33 from "@/app/public/reviews/review33.jpeg";
import review34 from "@/app/public/reviews/review34.jpeg";

export const logoImage = logo;
const reviewImages: StaticImageData[] = [review1, review2, review3, review4, review5, review6, review7, review8, review9, review10, review11, review12, review13, review14, review15, review16, review17, review18, review19, review20, review21, review22, review23, review24, review25, review26, review27, review28, review29, review30, review31, review32, review33, review34];

export function getReviewImage(index: number): StaticImageData {
  return reviewImages[index] ?? reviewImages[0];
}

export function getProjectImage(file: string): StaticImageData {
  const number = Number(file.match(/^review(\d+)\.jpeg$/)?.[1] ?? 1);
  return getReviewImage(number - 1);
}
