import type {DetailedHTMLProps, InputHTMLAttributes, ForwardedRef} from 'react'
import {forwardRef} from 'react'

export type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
export type InputProps = ReactInputProps & {}

//리액트 v19이전 책 내용대로 작성
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {className: _className, ...inputProps} = props
  const className = ['input', _className].join(' ')
  return <input ref={ref} {...inputProps} className={className} />
})

//리액트 v19부터는 forwardRef 안써도 됨!!!
// export const Input: FC<InputProps> = ({className: _className, ...inputProps}) => {
//   const className = ['input', _className].join(' ')
//   return <input {...inputProps} className={className} />
// }
