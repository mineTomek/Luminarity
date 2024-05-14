import HeroSection from '../components/HeroSection'
import Title from '../components/Title'
import RetriveDataModule from '../components/profile/RetriveDataModule'

export default function Profile() {
  return (
    <>
      <HeroSection heightClass="h-dvh-40">
        <Title sizeClass="text-[8vw]">Profile</Title>
      </HeroSection>
      <div className="flex min-h-dvh-60 flex-col gap-8">
        <RetriveDataModule />
      </div>
    </>
  )
}
