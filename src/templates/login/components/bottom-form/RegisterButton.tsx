import { Button } from '@/components/ui/button'
import Link from 'next/link'

const RegisterButton = () => {
  return (
    <div className="mt-7 flex flex-col items-center">
      <div className="flex w-full items-center justify-between gap-5">
        <div className="h-[1px] w-24 bg-gray-100"></div>
        <p className="text-sm font-light">Crie uma conta</p>
        <div className="h-[1px] w-24 bg-gray-100"></div>
      </div>

      <Link
        href={'/register'}
        className="mt-7 flex w-[48%] items-center justify-center"
      >
        <Button className="w-full bg-gray-900 font-light text-white   shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)]  transition-colors hover:bg-emerald-500 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          Registrar
        </Button>
      </Link>
    </div>
  )
}

export default RegisterButton
