import { ButtonLogout } from '@/components'

const Dashboard = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <p>Olá, Você esta logado!</p>
      <ButtonLogout />
    </main>
  )
}

export default Dashboard
