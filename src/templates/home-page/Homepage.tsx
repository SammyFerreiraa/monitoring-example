import { LoginPage } from '..'
import HeaderHome from './header/HeaderHome'

const Homepage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white px-16 py-6">
      <HeaderHome />
      <div className="flex h-full w-full flex-1 flex-row items-center justify-between overflow-hidden">
        <aside className="h-[calc(100vh-150px)] w-[calc(40vw)]  rounded-3xl bg-neutral-300"></aside>
        {/* Form  */}
        <LoginPage />
      </div>
    </div>
  )
}

export default Homepage
