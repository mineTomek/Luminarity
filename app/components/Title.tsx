export default function Title(props: {
  children: string | string[]
  sizeClass?: string
}) {
  return (
    <h1
      className={
        'text-shadow bg-transparent font-extrabold shadow-primary-500/70 md:shadow-primary-400/80 dark:text-zinc-300 ' +
        (props.sizeClass ?? 'text-[15vw]')
      }
    >
      {props.children}
    </h1>
  )
}
