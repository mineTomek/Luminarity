export class CenterBoxColor {
  static PRIMARY = 'primary'
  static ERROR = 'error'
}

export default function CenterBox(props: {
  opacity?: number
  color?: string
  children: JSX.Element
}) {
  const colorVariants: { [id: string]: string } = {
    primary: 'bg-gradient-to-b to-white from-primary-100/30 shadow-primary-200',
    error: 'bg-gradient-to-b to-white from-error-100/30 shadow-error-200',
  }
  return (
    <div
      className=".bg-white flex h-full w-full transition-opacity"
      style={{ opacity: props.opacity ?? 1 }}
    >
      <div
        className={
          'm-auto flex flex-col gap-3 rounded-xl p-3 shadow-xl ' +
          colorVariants[props.color ?? 'primary']
        }
      >
        {props.children}
      </div>
    </div>
  )
}
