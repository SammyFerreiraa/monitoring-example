import { schemaRegisterForm } from '@/templates/register/schemaRegisterForm'
import { FormRegisterProps } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export const useRegisterUser = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormRegisterProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaRegisterForm),
    defaultValues: {
      credentials: {
        usuario: '',
        email: '',
        senha: '',
        confirmarSenha: '',
      },
    },
  })

  const registerURL = process.env.NEXT_PUBLIC_URL_REGISTER || ''
  const registerUser = async (FormData: FormRegisterProps) => {
    const data = {
      user: FormData.credentials.usuario,
      email: FormData.credentials.email,
      password: FormData.credentials.senha,
      confirmPassword: FormData.credentials.confirmarSenha,
    }

    const res = await axios.post(registerURL, data)

    if (res.status === 200) {
      return true
    }
    return false
  }
  return {
    registerUser,
    handleSubmit,
    register,
    errors,
  }
}
