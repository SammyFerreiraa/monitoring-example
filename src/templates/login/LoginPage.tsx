'use client'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useLoginUser } from '@/hooks/useLoginUser'

const LoginPage = () => {
  const router = useRouter()

  const { handleSubmit, register } = useLoginUser()

  const handleFormSubmit = handleSubmit(async (FormData) => {
    const { email, password } = FormData.credentials

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      return false
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
        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}

export default LoginPage
