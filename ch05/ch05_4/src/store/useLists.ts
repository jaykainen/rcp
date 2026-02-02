import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import type {AppState} from './AppState'
import type {List} from './commonTypes'
import * as LO from '../store/listidOrders'
import * as L from '../store/listEntities'

export const useLists = () => {
  const dispatch = useDispatch()

  const lists = useSelector<AppState, List[]>(({listidOrders, listEntities}) =>
    listidOrders.map(uuid => listEntities[uuid])
  )

  const onCreateList1 = useCallback(
    (uuid: string, title: string) => {
      const list = {uuid, title}
      dispatch(LO.addListidToOrders(uuid))
      dispatch(L.addList(list))
    },
    [dispatch]
  )

  const onRemoveList = useCallback(
    (listid: string) => () => {
      dispatch(L.removeList(listid))
      dispatch(LO.removeListidFromOrders(listid))
    },
    [dispatch]
  )
  return {lists, onCreateList1, onRemoveList}
}
