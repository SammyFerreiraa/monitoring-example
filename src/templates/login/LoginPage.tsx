'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLoginUser } from '@/hooks/useLoginUser'
import { EnvelopeSimple, LockSimple } from '@phosphor-icons/react'
import Link from 'next/link'

const LoginPage = () => {
  const { handleSubmit, register, authLogin } = useLoginUser()

  const handleFormSubmit = handleSubmit(async (FormData) => {
    authLogin(FormData)
  })

  return (
    <div className="flex h-[calc(100vh-250px)] w-[calc(30vw-20px)] flex-col items-center justify-center  rounded-3xl bg-teal-800 px-10 font-light">
      <h1 className="mb-12 w-full text-center text-5xl font-bold">LOGIN</h1>
      <form
        onSubmit={handleFormSubmit}
        className="flex w-full flex-col items-center justify-center"
      >
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <div className="flex w-full flex-row items-center gap-3">
            <EnvelopeSimple size={32} className="shadow-sm" />
            <Input
              {...register('credentials.email')}
              type="text"
              autoComplete="off"
              placeholder="Email"
              className="h-10 border-none bg-gray-200 text-base text-black"
            />
          </div>
          <div className="flex w-full flex-row items-center justify-end gap-3">
            <LockSimple size={32} className="shadow-sm" />
            <Input
              {...register('credentials.password')}
              type="password"
              autoComplete="off"
              placeholder="Senha"
              className="h-10 border-none bg-gray-200 text-base text-black"
            />
          </div>
        </div>
        <button className="mt-1 w-full text-end text-xs">
          Esqueceu a senha?
        </button>
        <div className="mt-4 flex w-[45%] items-center justify-center gap-5">
          <Button
            className="w-full bg-emerald-600 font-light text-white   shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)]  transition-colors hover:bg-emerald-500 hover:shadow-[3.0px_6.0px_6.0px_rgba(0,0,0,0.38)]"
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
      <div className="mt-7 flex flex-col items-center">
        <div className="flex w-full items-center justify-center gap-5">
          <div className="h-[1px] w-24 bg-gray-100"></div>
          <p className="text-sm font-light">Crie uma conta</p>
          <div className="h-[1px] w-24 bg-gray-100"></div>
        </div>

        <Link
          href={'/register'}
          className="mt-7 flex w-full items-center justify-center"
        >
          <Button className="w-[48%] bg-gray-900 font-light text-white   shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)]  transition-colors hover:bg-emerald-500 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            Registrar
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
