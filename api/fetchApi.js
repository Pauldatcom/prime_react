import { z } from "zod";

export const numberSchema = z.object({
  number: z.number().min(1).max(50),
});

export async function fetchNumberAlea() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const raw = { number: Math.floor(Math.random() * 50) + 1 };

  return numberSchema.parse(raw);
}