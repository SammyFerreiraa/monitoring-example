export type LabelInputProps = {
  label: string
  type: string
  htmlFor?: string | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

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
