import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export type IconProps = ReactSpanProps & {
  name: String
}

//prettier-ignore
export const Icon: FC<IconProps> = ({name, className: _className, ...propssss}) => {
  const className = ['material-icons', _className].join(' ')
  return (
    <span {...propssss} className={className}>
      {name}
    </span>
  )
}

// export const Icon: FC<IconProps> = props => {
//   const {name} = props
//   return <span className="material-icon">{name}</span>
// }

//비구조화 할당 구문
// export const Icon: FC<IconProps> = ({name, style}) => {
//   return (
//     <span className="material-icons" style={style}>
//       {name}
//     </span>
//   )
// }

//비구조와 할당 구분+잔여연산자 사용
// export const Icon: FC<IconProps> = ({name, ...props}) => {
//   return (
//     <span className="material-icons" {...props}>
//       {name}
//     </span>
//   )
// }
