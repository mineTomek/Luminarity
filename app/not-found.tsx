'use client'

import Button from './components/Button'
import CenterBox from './components/CenterBox'
import Title from './components/Title'

export default function NotFound() {
  return (
    <main>
      <div className="w-full bg-white dark:bg-zinc-950">
        <div className="to z-50 grid h-dvh place-items-center content-center bg-gradient-to-b from-primary-100/90 to-transparent dark:from-primary-900/50">
          <Title>
            404
          </Title>
          <CenterBox>
            <p className="mx-auto">Page not found</p>
            <Button onClick={() => (window.location.href = '/')}>
              Home page
            </Button>
          </CenterBox>
        </div>
      </div>
    </main>
  )
}
