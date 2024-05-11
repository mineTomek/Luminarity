import RetriveDataModule from '../components/profile/RetriveDataModule'

export default function Profile() {
  return (
    <main>
      <div className="w-screen bg-white">
        <div className="to z-50 grid h-[40dvh] place-items-center content-center bg-gradient-to-b from-primary-100/90 to-transparent">
          <h1 className="text-shadow bg-transparent text-[8vw] font-extrabold shadow-primary-500/70 md:shadow-primary-400/80">
            Profile
          </h1>
        </div>
        <div className="flex min-h-[60dvh] flex-col gap-8">
          <RetriveDataModule />
        </div>
      </div>
    </main>
  )
}
