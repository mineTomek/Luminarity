import LoginForm from './components/LoginForm'

export default function Home() {
  return (
    <main>
      <div className="w-full bg-white">
        <div className="to z-50 grid h-[40dvh] place-items-center content-center bg-gradient-to-b from-primary-100/90 to-transparent">
          <h1 className="text-shadow bg-transparent text-[15vw] font-extrabold shadow-primary-500/70 md:shadow-primary-400/80">
            Luminarity
          </h1>
        </div>
        <div className="h-[60dvh]">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
