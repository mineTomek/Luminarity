import { MouseEventHandler } from 'react'

export default function Button(props: {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: JSX.Element | string
  autoWidth?: boolean
}) {
  return (
    <button
      className={
        'mx-auto rounded-full bg-primary-100 p-3 shadow-inner dark:bg-zinc-800 dark:shadow-zinc-700 ' +
        (!props.autoWidth && 'w-[8rem]')
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
