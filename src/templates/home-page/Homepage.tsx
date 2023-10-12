import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold ">Monitoring UFC</h1>
      <Link href={'/login'}>
        <Button>Identificar-se</Button>
      </Link>
    </div>
  )
}

export default Homepage
