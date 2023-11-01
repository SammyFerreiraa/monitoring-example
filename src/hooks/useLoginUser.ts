import { schemaForm } from '@/templates/login/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormProps } from '@/types'
import { signIn } from 'next-auth/react'

export const useLoginUser = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      credentials: {
        email: '',
        password: '',
      },
    },
  })

  const authLogin = async (FormData: FormProps) => {
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
