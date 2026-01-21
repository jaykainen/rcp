import {useSelector, useDispatch} from 'react-redux'
import {Title} from '../components'
import {useInterval} from '../hooks'
import type {AppState} from '../store'
import * as C from '../store/clock'

export default function ClockTest() {
  //전체상태 타입 AppState에서 꺼낼것은 C.State 타입인데, State의 clock값만 줘
  const clock = new Date(useSelector<AppState, C.State>(state => state.clock))
  const dispatch = useDispatch()
  useInterval(() => {
    //리덕스에 1초마다 현재시간을 문자열로 변환해서 보내기
    //dispatch라는 함수에 C.setClock라는 액션생성함수를 호출해서 액션객체를 만들어서 리듀서로 보냄
    dispatch(C.setClock(new Date().toISOString()))
  }, 1000)

  return (
    <section className="mt-4">
      <Title>Clock Test</Title>
      <div className="flex flex-col items-center mt-4">
        <p className="text-2xl text-blue-600 text-bold">{clock.toLocaleTimeString()}</p>
        <p className="text-lg text-blue-400 text-bold">{clock.toLocaleDateString()}</p>
      </div>
    </section>
  )
}
