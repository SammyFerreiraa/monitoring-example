import { FormLogin, RegisterButton } from './components'

const LoginPage = () => {
  return (
    <div className="flex h-[calc(100vh-250px)] w-[calc(30vw-20px)] flex-col items-center justify-center  rounded-3xl bg-teal-800 px-10 font-light">
      <h1 className="mb-12 w-full text-center text-5xl font-bold">LOGIN</h1>
      <FormLogin />
      <RegisterButton />
    </div>
  )
}

export default LoginPage
