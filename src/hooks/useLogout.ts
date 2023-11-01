import { signOut } from 'next-auth/react'

export const useLogout = () => {
  async function logout() {
    await signOut({
      redirect: false,
    })
  }

  return { logout }
}
