'use client'

import { Button } from '@/components/ui/button'
import { useLogout } from '@/hooks/useLogout'
import { useRouter } from 'next/navigation'

const ButtonLogout = () => {
  const { logout } = useLogout()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.replace('/')
  }

  return <Button onClick={handleLogout}>Logout</Button>
}

export default ButtonLogout
