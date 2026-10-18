import { z } from "zod";
import { services } from "@/lib/services";

const serviceOptions = [...services.map((item) => item.title), "Other / not sure"] as unknown as [string, ...string[]];

export const quoteSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional().default(""),
  service: z.enum(serviceOptions),
  area: z.string().trim().max(100).optional().default(""),
  contactMethod: z.enum(["Email", "Phone", "WhatsApp", "No preference"]).optional().default("No preference"),
  timing: z.enum(["Flexible", "As soon as practical", "Planning ahead"]).optional().default("Flexible"),
  details: z.string().trim().min(10).max(4000),
  website: z.string().max(200).optional().default("")
});

export type QuoteInput = z.infer<typeof quoteSchema>;
