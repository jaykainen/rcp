import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'
//import {logger} from './logger'
import logger from 'redux-logger'

const useLogger = process.env.NODE_ENV !== 'production'

const initializeStore = () => {
  //getDefaultMiddleware에 redux-thunk가 기본으로 포함되어 별도의 설정 불필요. 책은 구버전이어서 [thunk]로 직접 추가했었음
  const middleware: any[] = []
  if (useLogger) {
    middleware.push(logger)
  }
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware)
  })
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
