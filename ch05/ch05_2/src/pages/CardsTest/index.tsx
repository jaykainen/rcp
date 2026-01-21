import {useCallback, useMemo, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Icon} from '../../theme/daisyui'
import * as D from '../../data'
import type {AppState} from '../../store'
import * as C from '../../store/cards'
import {Title} from '../../components'
import Card from './Card'

const makeCard = () =>
  D.makeCard(D.randomUUID(), D.makeRandomUser(), D.randomImage(200, 100), '', '', '', '')

export default function CardsTest() {
  const dispatch = useDispatch()
  //useSelector는 실시간으로 데이터 가져옴. 리덕스 스토어의 상태가 바뀌면 자동으로 리렌더링됨.
  const cards = useSelector<AppState, C.State>(({cards}) => cards)
  const addCard = useCallback(() => {
    dispatch(C.addCard(makeCard()))
  }, [dispatch])

  const removeCard = useCallback(
    (id: string) => () => dispatch(C.removeCard(id)),
    [dispatch]
  )

  const children = useMemo(
    () =>
      cards.map(card => (
        <Card key={card.uuid} card={card} onRemove={removeCard(card.uuid)} />
      )),
    [cards, removeCard]
  )

  //컴포넌트가 화면에 나타날때(마운트) 될때 실행. 마치 jquery의 $(document).ready()같은 느낌
  useEffect(addCard, [addCard])

  return (
    <section className="mt-4">
      <Title>Cards Test</Title>
      <div className="flex justify-center mt-4">
        <Icon name="add" className="btn-primary" onClick={addCard} />
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  )
}
