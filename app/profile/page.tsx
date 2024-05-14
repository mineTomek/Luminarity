import HeroSection from '../components/HeroSection'
import Title from '../components/Title'
import RetriveDataModule from '../components/profile/RetriveDataModule'

export default function Profile() {
  return (
    <>
      <HeroSection heightClass="h-[40dvh]">
        <Title sizeClass="text-[8vw]">Profile</Title>
      </HeroSection>
      <div className="flex min-h-[60dvh] flex-col gap-8">
        <RetriveDataModule />
      </div>
    </>
  )
}
