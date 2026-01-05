import {useClock} from './hooks'
import Clock from './pages/Clock'

//훅 만들어서 사용시
export default function App() {
  const today = useClock()
  return <Clock today={today} />
}

// 훅 안 만들고 기본 react 훅만 사용시
// import {useEffect, useState} from 'react'
// import Clock from './pages/Clock'

// export default function App() {
//   const [today, setToday] = useState(new Date())
//   useEffect(() => {
//     //컴포넌트가 생성될 때 실행
//     console.log('useEffect called')
//     const duration = 1000
//     const id = setInterval(() => {
//       setToday(new Date())
//     }, duration)
//     return () => clearInterval(id) //컴포넌트가 소멸할 때 한번 실행
//   }, [])
//   return <Clock today={today} />
// }
