'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FormRegisterProps } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const RegisterPage = () => {
  const registerURL = process.env.NEXT_PUBLIC_URL_REGISTER || ''
  const router = useRouter()

  const schemaRegisterForm: FormRegisterProps = z.object({
    credentials: z
      .object({
        usuario: z.string().refine((value) => /^[A-Za-z\s]+$/.test(value), {
          message:
            'O usuário deve conter apenas letras maiúsculas, letras minúsculas e espaços.',
        }),
        email: z
          .string()
          .email('E-mail invalido')
          .toLowerCase()
          .refine(
            (email) => {
              const domain = email.split('@')[1]
              return domain && domain.toLowerCase() === 'alu.ufc.br'
            },
            {
              message: 'O email deve ter o domínio @alu.ufc.br',
            },
          ),
        senha: z
          .string()
          .min(8, 'A senha deve ter pelo menos 8 caracteres')
          .refine((value) => /[A-Z]/.test(value), {
            message: 'A senha deve conter pelo menos uma letra maiúscula',
          })
          .refine((value) => /[^a-zA-Z0-9]/.test(value), {
            message: 'A senha deve conter pelo menos um caractere especial',
          }),
        confirmarSenha: z.string(),
      })
      .refine((fields) => fields.senha === fields.confirmarSenha, {
        path: ['confirmarSenha'],
        message: 'As senhas não conferem',
      }),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormRegisterProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaRegisterForm),
    defaultValues: {
      credentials: {
        usuario: '',
        email: '',
        senha: '',
        confirmarSenha: '',
      },
    },
  })

  const handleFormSubmit = handleSubmit(async (FormData) => {
    const data = {
      user: FormData.credentials.usuario,
      email: FormData.credentials.email,
      password: FormData.credentials.senha,
      confirmPassword: FormData.credentials.confirmarSenha,
    }

    const res = await axios.post(registerURL, data)

    if (res.status === 200) {
      router.replace('/login')
    }
  })

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
        <div className="flex flex-col items-center justify-center gap-4">
          <div>
            <Label htmlFor="usuario">Usuário</Label>
            <Input
              {...register('credentials.usuario')}
              className="w-96"
              type="text"
              autoComplete="off"
            />
          </div>
          {errors.credentials?.usuario?.message && (
            <p className="text-xs font-bold text-red-500">
              {errors.credentials?.usuario?.message}
            </p>
          )}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              {...register('credentials.email')}
              className="w-96"
              type="text"
              autoComplete="off"
            />
          </div>
          {errors.credentials?.email?.message && (
            <p className="text-xs font-bold text-red-500">
              {errors.credentials?.email?.message}
            </p>
          )}
          <div>
            <Label htmlFor="senha">Senha</Label>
            <Input
              {...register('credentials.senha')}
              className="w-96"
              type="text"
              autoComplete="new-password"
            />
          </div>
          {errors.credentials?.senha?.message && (
            <p className="text-xs font-bold text-red-500">
              {errors.credentials?.senha?.message}
            </p>
          )}
          <div>
            <Label htmlFor="confirmarSenha">Confirmar senha</Label>
            <Input
              {...register('credentials.confirmarSenha')}
              className="w-96"
              type="text"
              autoComplete="new-password"
            />
          </div>
          {errors.credentials?.confirmarSenha?.message && (
            <p className="text-xs font-bold text-red-500">
              {errors.credentials?.confirmarSenha?.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-center gap-5">
          <Button type="submit">Cadastrar</Button>
          <Link href={'/login'}>
            <Button>Logar</Button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
