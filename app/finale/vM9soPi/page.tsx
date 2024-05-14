'use client'

import { useEffect } from 'react'
import CenterBox from './../../components/CenterBox'
import Title from './../../components/Title'
import Button from '@/app/components/Button'
import HeroSection from '@/app/components/HeroSection'

export default function SecondaryEnding() {
  useEffect(() => {
    window.localStorage.setItem('ending-2', '1')
  }, [])

  return (
    <HeroSection>
      <Title sizeClass="text-[7vw]">You{"'"}ve passed the quest!</Title>
      <Title sizeClass="text-[3vw]">Ending 2/2</Title>
      <CenterBox>
        <p className="mx-auto max-w-[60vw]">
          You have reached the second ending. In this parallel universe, all the
          participants have an opportunity to work as{' '}
          <b>Chief Investigation Officers</b> at Luminarity 1C, and we are sure
          they will handle the challenge of this profession.
        </p>
        <Button onClick={() => window.location.href}>Home Page</Button>
      </CenterBox>
    </HeroSection>
  )
}
