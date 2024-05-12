import Title from '../components/Title'
import RetriveDataModule from '../components/profile/RetriveDataModule'

export default function Profile() {
  return (
    <main>
      <div className="w-screen bg-white dark:bg-zinc-950">
        <div className="to z-50 grid h-[40dvh] place-items-center content-center bg-gradient-to-b from-primary-100/90 to-transparent dark:from-primary-900/50">
          <Title small>Profile</Title>
        </div>
        <div className="flex min-h-[60dvh] flex-col gap-8">
          <RetriveDataModule />
        </div>
      </div>
    </main>
  )
}
