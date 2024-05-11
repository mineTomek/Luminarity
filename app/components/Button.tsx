import { MouseEventHandler } from 'react'

export default function Button(props: {
  text: string
  onClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      className="mx-auto w-[8rem] rounded-full bg-primary-100 p-3 shadow-inner"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}
