import {useEffect} from 'react'
export const useEventListener = (
  target: EventTarget | null,
  type: string,
  callback: EventListenerOrEventListenerObject | null
) => {
  useEffect(() => {
    if (target && callback) {
      console.log('4444444')
      target.addEventListener(type, callback)
      console.log('5555555555')
      return () => {
        console.log('77777777')
        target.removeEventListener(type, callback)
        console.log('88888')
      }
    }
  }, [target, type, callback])
}
