'use client'

import { useEffect, useState } from 'react'
import LoginForm from './components/LoginForm'
import Title from './components/Title'
import CenterBox from './components/CenterBox'
import Button from './components/Button'
import HeroSection from './components/HeroSection'

type EndingsSave = {
  1: boolean
  2: boolean
}

export default function Home() {
  const [endings, setEndings] = useState<EndingsSave>({ 1: false, 2: false })

  useEffect(() => {
    setEndings({
      1: window.localStorage.getItem('ending-1') == '1',
      2: window.localStorage.getItem('ending-2') == '1',
    })
  }, [])

  const handleClearingEndings = () => {
    window.localStorage.removeItem('ending-1')
    window.localStorage.removeItem('ending-2')

    setEndings({ 1: false, 2: false })
  }

  return (
    <>
      <HeroSection heightClass='h-[40dvh]'>
        <Title>Luminarity</Title>
      </HeroSection>
      <div className={endings[1] || endings[2] ? 'h-[40dvh]' : 'h-[60dvh]'}>
        <LoginForm />
      </div>
      {(endings[1] || endings[2]) && (
        <div className="h-[20dvh]">
          <CenterBox>
            <div className="flex gap-3">
              {endings[1] && (
                <Button
                  onClick={() => (window.location.href = '/finale/jA9gcDw')}
                >
                  Ending 1
                </Button>
              )}
              {endings[2] && (
                <Button
                  onClick={() => (window.location.href = '/finale/vM9soPi')}
                >
                  Ending 2
                </Button>
              )}
              {(endings[1] || endings[2]) && (
                <Button onClick={handleClearingEndings} autoWidth>
                  X
                </Button>
              )}
            </div>
          </CenterBox>
        </div>
      )}
    </>
  )
}
