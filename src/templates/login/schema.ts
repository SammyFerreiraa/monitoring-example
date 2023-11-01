import { z } from 'zod'

export const schemaForm = z.object({
  credentials: z.object({
    email: z.string(),
    password: z.string(),
  }),
})
