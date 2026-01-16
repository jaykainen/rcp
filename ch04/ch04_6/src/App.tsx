import ResponsiveContextTest from './pages/ResponsiveContextTest'
import {ResponsiveProvider} from './contexts'

export default function App() {
  return (
    <ResponsiveProvider id="bbb">
      <main>
        <ResponsiveContextTest />
      </main>
    </ResponsiveProvider>
  )
}
