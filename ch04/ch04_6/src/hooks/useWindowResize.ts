import {useState, useEffect} from 'react'
import {useEventListener} from './useEventListener'

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0, 0])

  useEffect(() => {
    //개발계에서 react strict mode가 마운트->언마운트->마운트로 2번 호출함(혹시 모를 오류 알려주기 위함, 운영은 그렇지 않음)
    //따라서 콘솔로그가 2번씩 찍힘!!!!!
    console.log('1111')
    setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
    console.log('111333s')
  }, []) //컴포넌트가 마운트 될때 창 크기 설정

  useEventListener(window, 'resize', () => {
    console.log('22222')
    setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
  }) //창 크기가 변경될 때마다 설정

  return widthHeight
}
