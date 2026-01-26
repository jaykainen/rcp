import {Provider as ReduxProvider} from 'react-redux'
//드래그앤 드롭을 위한 것. 책에는 react-dnd로 되어 있지만 최신버전에서는 dist/core/DndProvider로 바뀜
import {DndProvider} from 'react-dnd/dist/core/DndProvider'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {useStore} from './store'
import Board from './pages/Board'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </ReduxProvider>
  )
}
