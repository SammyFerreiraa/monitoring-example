import { schemaLoginForm } from '@/templates/login/schemaLoginForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormLoginProps } from '@/types'
import { signIn } from 'next-auth/react'

export const useLoginUser = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormLoginProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaLoginForm),
    defaultValues: {
      credentials: {
        email: '',
        password: '',
      },
    },
  })

  const authLogin = async (FormData: FormLoginProps) => {
    const { email, password } = FormData.credentials

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      return false
    }
    return true
  }

  return {
    authLogin,
    errors,
    register,
    handleSubmit,
  }
}
