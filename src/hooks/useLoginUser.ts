import { schemaForm } from '@/templates/login/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormProps } from '@/types'

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

  return {
    errors,
    register,
    handleSubmit,
  }
}
