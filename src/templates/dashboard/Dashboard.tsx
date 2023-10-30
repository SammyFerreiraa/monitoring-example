import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { ButtonLogout } from '@/components'
import { getServerSession } from 'next-auth'

const Dashboard = async () => {
  const session = await getServerSession(nextAuthOptions)
  console.log(session)
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <p>Olá, {session?.name} Você está logado!</p>
      <p>Seu email: {session?.email}</p>
      <p>Seu JWT: {session?.jwt}</p>
      <ButtonLogout />
    </main>
  )
}

export default Dashboard
