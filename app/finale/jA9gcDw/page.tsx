'use client'

import CenterBox from './../../components/CenterBox'
import Title from './../../components/Title'

export default function PrimaryEnding() {
  return (
    <main>
      <div className="w-full bg-white dark:bg-zinc-950">
        <div className="to z-50 grid h-dvh place-items-center content-center gap-3 bg-gradient-to-b from-primary-100/90 to-transparent dark:from-primary-900/50">
          <Title sizeClass="text-[7vw]">You{"'"}ve passed the quest!</Title>
          <Title sizeClass="text-[3vw]">Ending 1/2</Title>
          <CenterBox>
            <p className="mx-auto max-w-[60vw]">
              You have reached the end. All the participants have an opportunity
              to work as <b>Investigation Assistants</b> at Luminarity 1C, and
              we are sure you will get a promotion soon.
            </p>
          </CenterBox>
        </div>
      </div>
    </main>
  )
}
