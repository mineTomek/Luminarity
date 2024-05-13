'use client'

import CenterBox from './../../components/CenterBox'
import Title from './../../components/Title'

export default function SecondaryEnding() {
  return (
    <main>
      <div className="w-full bg-white dark:bg-zinc-950">
        <div className="to z-50 grid h-dvh place-items-center content-center gap-3 bg-gradient-to-b from-primary-100/90 to-transparent dark:from-primary-900/50">
          <Title sizeClass="text-[7vw]">You{"'"}ve passed the quest!</Title>
          <Title sizeClass="text-[3vw]">Ending 2/2</Title>
          <CenterBox>
            <p className="mx-auto max-w-[60vw]">
              You have reached the second ending. In this parallel universe, all
              the participants have an opportunity to work as{' '}
              <b>Chief Investigation Officers</b> at Luminarity 1C, and we are
              sure they will handle the challenge of this profession.
            </p>
          </CenterBox>
        </div>
      </div>
    </main>
  )
}
