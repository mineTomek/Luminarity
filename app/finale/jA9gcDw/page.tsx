'use client'

import { useEffect } from 'react'
import CenterBox from './../../components/CenterBox'
import Title from './../../components/Title'
import Button from '@/app/components/Button'
import HeroSection from '@/app/components/HeroSection'

export default function PrimaryEnding() {
  useEffect(() => {
    window.localStorage.setItem('ending-1', '1')
  }, [])

  return (
    <HeroSection>
      <Title sizeClass="text-tm">You{"'"}ve passed the quest!</Title>
      <Title sizeClass="text-ts">Ending 1/2</Title>
      <CenterBox>
        <p className="mx-auto max-w-vw-60">
          You have reached the end. All the participants have an opportunity to
          work as <b>Investigation Assistants</b> at Luminarity 1C, and we are
          sure you will get a promotion soon.
        </p>
        <Button onClick={() => window.location.href}>Home Page</Button>
      </CenterBox>
    </HeroSection>
  )
}
