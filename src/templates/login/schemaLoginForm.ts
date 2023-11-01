import { z } from 'zod'

export const schemaLoginForm = z.object({
  credentials: z.object({
    email: z.string(),
    password: z.string(),
  }),
})
