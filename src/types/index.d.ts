import { z } from 'zod'

export type UserProps = {
  email: string
  password: string
  name: string
  age: number
  monitor: boolean
  monitoring_disciplines: string[]
  disciplines: string[]
}

export type AllUsers = {
  users: UserProps[]
}

export interface NextAuthSessionProviderProps {
  children: React.ReactNode
}

export interface PrivateLayoutProps {
  children: React.ReactNode
}

export type FormLoginProps = z.infer<typeof schemaLoginForm>
export type FormRegisterProps = z.infer<typeof schemaRegisterForm>
