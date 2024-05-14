import { ReactNode } from 'react'

export default function HeroSection(props: {
  children: ReactNode
  heightClass?: string
}) {
  return (
    <div
      className={
        'to z-50 grid place-items-center content-center gap-3 bg-gradient-to-b from-primary-100/90 to-transparent dark:from-primary-900/50 ' +
        (props.heightClass ?? 'h-dvh')
      }
    >
      {props.children}
    </div>
  )
}
