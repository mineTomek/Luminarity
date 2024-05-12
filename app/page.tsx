import LoginForm from './components/LoginForm'
import Title from './components/Title'

export default function Home() {
  return (
    <main>
      <div className="w-screen bg-white dark:bg-zinc-950">
        <div className="to z-50 grid h-[40dvh] place-items-center content-center bg-gradient-to-b from-primary-100/90 to-transparent dark:from-primary-900/50">
          <Title>Luminarity</Title>
        </div>
        <div className="h-[60dvh]">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
