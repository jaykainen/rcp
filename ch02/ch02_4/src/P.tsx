//import type {FC, ReactNode} from 'react'
import type {FC, PropsWithChildren} from 'react'

/*export type PProps ={
  children?: ReactNode
}
*/
export type PProps = {}

/*
const P:FC<PProps> = props => {
  const {children} = props
  return <p children={children}/>
}
*/
const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props}></p>
}

export default P
