import UseOrCreateTest from './pages/UseOrCreateTest'
import Memo from './pages/Memo'
import Callback from './pages/Callback'
import HighOrderCallback from './pages/HighOrderCallback'

//훅 만들어서 사용시
export default function App() {
  return (
    <div>
      <HighOrderCallback />
      <Callback />
      <Memo />
      <UseOrCreateTest />
    </div>
  )
}
