import {Component} from 'react'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

//클래스 컴포넌트 render매서드+return 필요
// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent href="http~" text="toto" />
//         <ClassComponent href="http~" text="gg" />
//       </ul>
//     )
//   }
// }

//함수 컴포넌트. return만 있으면 됨
// export default function App() {
//   return <div>HIdddd!</div>
// }

//화살표 방식 함수 컴포넌트. return + export 필요함
// const App = () => {
//   return <h1>function Component</h1>
// }
// export default App

export default function App() {
  return (
    <ul>
      <ClassComponent href="aaa" text="bbb" />
      <ArrowComponent href="ccc" text="nnn" />
    </ul>
  )
}
