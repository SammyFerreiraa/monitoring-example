'use client'

import { LabelInput } from '@/components'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

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
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-8"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <LabelInput
            label="Email"
            htmlFor="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <LabelInput
            label="Password"
            htmlFor="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}

export default LoginPage
