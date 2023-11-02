'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLoginUser } from '@/hooks/useLoginUser'
import Link from 'next/link'

const LoginPage = () => {
  const { handleSubmit, register, authLogin } = useLoginUser()

  const handleFormSubmit = handleSubmit(async (FormData) => {
    authLogin(FormData)
  })

  return (
    <div className="h-[calc(100vh-250px)] w-[calc(30vw-20px)]  rounded-3xl bg-teal-800">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center justify-center gap-8"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div>
            <Input
              {...register('credentials.email')}
              type="text"
              autoComplete="off"
              placeholder="Email"
            />
          </div>
          <div>
            <Input
              {...register('credentials.password')}
              type="password"
              autoComplete="off"
              placeholder="Senha"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Button type="submit">Login</Button>
          <Button>
            <Link href={'/register'}>Registrar</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
