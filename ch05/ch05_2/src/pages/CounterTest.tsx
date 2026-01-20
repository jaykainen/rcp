import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Title, Subtitle} from '../components'
import {Icon} from '../theme/daisyui'
import type {AppState} from '../store'
import * as C from '../store/counter'

export default function CounterTest() {
  const dispatch = useDispatch()

  //({counter}) 구조분해 할당 : state에서 counter 속성만 즉시 뽑아서 변수로 사용하겠다는 뜻!!
  //const counter = useSelector<AppState, C.State>(state => state.counter)와 같음
  const counter = useSelector<AppState, C.State>(({counter}) => counter)
  const increase = useCallback(() => dispatch(C.increaseCounter()), [dispatch])
  const decrease = useCallback(() => dispatch(C.decreaseCounter()), [dispatch])

  return (
    <section className="mt-4">
      <Title>Counter Test</Title>
      <div className="flex justify-center mt-4 p-t">
        <div className="flex items-center justify-around w-1/3 text-blue-500 text-bold">
          <Icon name="add_circle" iconClassName="text-3xl" onClick={increase} />
          <Subtitle>{counter}</Subtitle>
          <Icon name="remove_circle" iconClassName="text-3xl" onClick={decrease} />
        </div>
      </div>
    </section>
  )
}
