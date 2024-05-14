'use client'

import Button from './components/Button'
import CenterBox from './components/CenterBox'
import HeroSection from './components/HeroSection'
import Title from './components/Title'

export default function NotFound() {
  return (
    <HeroSection>
      <Title>404</Title>
      <CenterBox>
        <p className="mx-auto">Page not found</p>
        <Button onClick={() => (window.location.href = '/')}>Home page</Button>
      </CenterBox>
    </HeroSection>
  )
}
