'use client'

import { useEffect, useState } from 'react'
import LoginForm from './components/LoginForm'
import Title from './components/Title'
import CenterBox from './components/CenterBox'
import Button from './components/Button'

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
    <main>
      <div className="w-screen bg-white dark:bg-zinc-950">
        <div className="to z-50 grid h-[40dvh] place-items-center content-center bg-gradient-to-b from-primary-100/90 to-transparent dark:from-primary-900/50">
          <Title>Luminarity</Title>
        </div>
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
      </div>
    </main>
  )
}
