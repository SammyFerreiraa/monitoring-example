'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRegisterUser } from '@/hooks/useRegisterUser'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const RegisterPage = () => {
  const router = useRouter()

  const { registerUser, handleSubmit, register, errors } = useRegisterUser()

  const handleFormSubmit = handleSubmit(async (FormData) => {
    if (await registerUser(FormData)) {
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
              type="password"
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
              type="password"
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
