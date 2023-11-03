'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLoginUser } from '@/hooks/useLoginUser'
import { EnvelopeSimple, LockSimple } from '@phosphor-icons/react'

const FormLogin = () => {
  const { handleSubmit, register, authLogin } = useLoginUser()

  const handleFormSubmit = handleSubmit(async (FormData) => {
    authLogin(FormData)
  })

  return (
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
            className="h-10 border-none bg-gray-200 text-sm text-black placeholder:text-neutral-500"
          />
        </div>
        <div className="flex w-full flex-row items-center justify-end gap-3">
          <LockSimple size={32} className="shadow-sm" />
          <Input
            {...register('credentials.password')}
            type="password"
            autoComplete="off"
            placeholder="Senha"
            className="h-10 border-none bg-gray-200 text-sm text-black placeholder:text-neutral-500"
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
  )
}

export default FormLogin
