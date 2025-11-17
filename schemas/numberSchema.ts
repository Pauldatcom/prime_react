import { z } from 'zod';

export const inputNumberSchema = z.object({
  number: z.coerce.number().int().min(1).max(10000),
});

