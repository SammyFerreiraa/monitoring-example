import axios from 'axios'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvinder from 'next-auth/providers/credentials'

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvinder({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const res = axios.post(
          'https://to-do-mountains.onrender.com/auth/login',
          {
            email: credentials?.email,
            password: credentials?.password,
          },
        )
        const user = (await res).data

        if (user && (await res).status === 200) {
          return user
        }
        return null
      },
    }),
  ],

  pages: {
    signIn: '/login',
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }
