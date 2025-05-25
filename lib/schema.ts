import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  datetime: z.coerce.date()
});