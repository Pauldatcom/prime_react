import { z } from "zod";

export const numberSchema = z.object({
  number: z.number().min(1).max(50),
});

export type NumberData = z.infer<typeof numberSchema>;

const API_DELAY_MS = 500;

export async function fetchNumberAlea(): Promise<NumberData> {
  await new Promise((resolve) => setTimeout(resolve, API_DELAY_MS));
  const raw = { number: Math.floor(Math.random() * 50) + 1 };

  return numberSchema.parse(raw);
}

