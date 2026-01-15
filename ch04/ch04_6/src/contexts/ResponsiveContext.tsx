import {createContext} from 'react'

type ContextType = {
  breakpoint: string //공유할 데이터 속성
}

const defaultContextValue: ContextType = {
  breakpoint: '' //공유할 데이터 속성 초깃값
}

export const ResponsiveContext = createContext<ContextType>(defaultContextValue)
