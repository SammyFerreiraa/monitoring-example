import { z } from 'zod'

export const schemaForm = z.object({
  credentials: z.object({
    email: z
      .string()
      .min(1, 'O email é obrigatório')
      .email('O email deve ter um formato valido')
      .refine(
        (email) => {
          const domain = email.split('@')[1]
          return domain && domain.toLowerCase() === 'alu.ufc.br'
        },
        {
          message: 'o email deve ter o domínio @alu.ufc.br',
        },
      ),
    password: z
      .string()
      .min(8, 'A senha deve ter pelo menos 8 caracteres')
      .refine((value) => /[A-Z]/.test(value), {
        message: 'A senha deve conter pelo menos uma letra maiúscula',
      })
      .refine((value) => /[^a-zA-Z0-9]/.test(value), {
        message: 'A senha deve conter pelo menos um caractere especial',
      }),
  }),
})
