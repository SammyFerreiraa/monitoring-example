import { LabelInput } from '@/components'
import { Button } from '@/components/ui/button'

const LoginPage = () => {
  return (
    <div>
      <form className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <LabelInput label="Email" type="email" />
          <LabelInput label="Password" type="password" />
        </div>
        <Button>Login</Button>
      </form>
    </div>
  )
}

export default LoginPage
