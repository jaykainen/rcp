import {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {Title} from '../../components'
import CreateListForm from './CreateListForm'

import * as LO from '../../store/listidOrders'
import * as L from '../../store/listEntities'

export default function Board() {
  const dispatch = useDispatch()

  const onCreateList1 = useCallback(
    (uuid: string, title: string) => {
      const list = {uuid, title}
      dispatch(LO.addListidToOrders(list.uuid))
      dispatch(L.addList(list))
      //console.log('onCreateList', uuid, title)
    },
    [dispatch]
  )
  return (
    <section className="mt-4">
      <Title>Board</Title>
      <div className="mt-4">
        <CreateListForm onCreateList2={onCreateList1} />
      </div>
    </section>
  )
}
