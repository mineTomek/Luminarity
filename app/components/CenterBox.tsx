export class CenterBoxColor {
  static PRIMARY = 'primary'
  static ERROR = 'error'
}

export default function CenterBox(props: {
  opacity?: number
  color?: string
  children: any
}) {
  const colorVariants: { [id: string]: string } = {
    primary:
      'bg-gradient-to-b to-white dark:to-zinc-900 from-primary-100/30 dark:from-primary-900 shadow-primary-800',
    error:
      'bg-gradient-to-b to-white dark:to-zinc-900 from-error-100/30 dark:from-error-900 shadow-error-800',
  }
  return (
    <div
      className="flex h-full w-full transition-opacity"
      style={{ opacity: props.opacity ?? 1 }}
    >
      <div
        className={
          'm-auto flex flex-col gap-3 rounded-xl p-3 shadow-xl dark:text-white ' +
          colorVariants[props.color ?? 'primary']
        }
      >
        {props.children}
      </div>
    </div>
  )
}
