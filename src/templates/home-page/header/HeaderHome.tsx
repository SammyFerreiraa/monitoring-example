'use client'

import { Books } from '@phosphor-icons/react'

const HeaderHome = () => {
  return (
    <header className="flex min-w-full items-center justify-start px-2">
      <Books size={60} fill="#115e59" />
      <p className="ml-4 text-4xl font-bold text-teal-800">Meu Monitor</p>
    </header>
  )
}

export default HeaderHome
