'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useLoginUser } from '@/hooks/useLoginUser'
import Link from 'next/link'

const LoginPage = () => {
  const router = useRouter()

  const { handleSubmit, register, authLogin } = useLoginUser()

  const handleFormSubmit = handleSubmit(async (FormData) => {
    if (await authLogin(FormData)) {
      router.replace('/dashboard')
    }
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
              {...register('credentials.email')}
              className="w-96"
              type="text"
              autoComplete="off"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              {...register('credentials.password')}
              className="w-96"
              type="password"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Button type="submit">Login</Button>
          <Button>
            <Link href={'/register'}>Register</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
