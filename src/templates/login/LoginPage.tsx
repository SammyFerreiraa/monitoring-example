'use client'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useLoginUser } from '@/hooks/useLoginUser'
import { watch } from 'fs'

const schemaForm = z.object({
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

const LoginPage = () => {
  const { handleSubmit, register, errors } = useLoginUser()

  const router = useRouter()

  const handleFormSubmit = handleSubmit(async (formData) => {
    const { email, password } = formData.credentials

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      console.log(result)
      return
    }

    router.replace('/dashboard')
  })

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center justify-center gap-8"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              className="w-96"
              {...register('credentials.email')}
              type="text"
              autoComplete="off"
            />
            {errors?.credentials?.email?.message && (
              <p className="pt-1 text-center text-sm text-red-700">
                {errors?.credentials?.email?.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              className="w-96"
              {...register('credentials.password')}
              type="password"
              autoComplete="off"
            />
            {errors?.credentials?.password?.message && (
              <p className="pt-1 text-center text-sm text-red-700">
                {errors?.credentials?.password?.message}
              </p>
            )}
          </div>
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}

export default LoginPage
