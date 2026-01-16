import type {FC, PropsWithChildren} from 'react'
import {createContext, useContext} from 'react'
import {useWindowResize} from '../hooks'

type ContextType = {
  breakpoint: string //공유할 데이터 속성
}

const defaultContextValue: ContextType = {
  breakpoint: '' //공유할 데이터 속성 초깃값
}

export const ResponsiveContext = createContext<ContextType>(defaultContextValue)

type ResponsiveProviderProps = {}

export const ResponsiveProvider: FC<PropsWithChildren<ResponsiveProviderProps>> = ({
  children,
  ...props
}) => {
  const [width] = useWindowResize()
  const breakpoint =
    width < 640
      ? 'sm'
      : width < 768
      ? 'md'
      : width < 1024
      ? 'lg'
      : width < 1280
      ? 'xl'
      : '2xl'
  const value = {
    breakpoint
  } //공유할 데이터 속성 값

  //아래의 ResponsiveContext.Provider로 자식노드에게 공유할 데이터 제공
  return <ResponsiveContext.Provider value={value} children={children} />
}

export const useResponsive = () => {
  const {breakpoint} = useContext(ResponsiveContext)
  return breakpoint
}
