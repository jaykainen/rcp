import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store'
import ClockTest from './pages/ClockTest'
import Counter from './pages/CounterTest'
import RemoteUserTest from './pages/RemoteUserTest'
import CardsTest from './pages/CardsTest'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <CardsTest />
      <RemoteUserTest />
      <Counter />
      <ClockTest />
    </ReduxProvider>
  )
}
