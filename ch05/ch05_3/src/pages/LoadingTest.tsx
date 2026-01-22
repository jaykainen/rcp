import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import type {AppState} from '../store'
import {Title} from '../components'
import {Button} from '../theme/daisyui'
import * as L from '../store/loading'

export default function LoadingTest() {
  const dispatch = useDispatch()
  const loading = useSelector<AppState, L.State>(({loading}) => loading)

  const doTimedLoading = useCallback(() => {
    //thunk 미들웨어는 원래 액션 객체만 보낼수 있지만 함수를 보낼수 있게 해주는 것
    //EX) dispatch({type: 'hello', payload: 'world'}) <-- 원래는 이렇게 객체만 되는데
    dispatch<any>(L.doTimedLoading(1000)) //함수를 보낼수 있게 됨
  }, [dispatch])

  return (
    <section className="mt-4">
      <Title>Loading Test</Title>
      <div className="mt-4">
        <div className="flex justify-center mt-4">
          <Button
            className="btn-sm btn-primary"
            onClick={doTimedLoading}
            disabled={loading}>
            DO TIMED LOADING
          </Button>
        </div>
        {loading && (
          <div className="flex items-center justify-center">
            <Button className="btn-circle loading"></Button>
          </div>
        )}
      </div>
    </section>
  )
}
