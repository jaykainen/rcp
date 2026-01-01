import P from './P'

export default function App() {
  //1.기본버전
  // const texts = [<p key="1">hello</p>, <p key="2">world</p>]
  // return <div>{texts}</div>
  //2. 향상된 버전(map 사용)
  // const texts = ['hello', 'world'].map((text, index) => <p key={index}>{text}</p>)
  // return <div>{texts}</div>
  //3.children 속성
  const texts = ['hello', 'bye'].map((text, index) => <p key={index} children={text} />)
  return <div children={texts} />

  //3. P컴포넌트 사용
  // const texts = ['hello', 'world'].map((text, index) => <P key={index} children={text} />)
  // return <div children={texts}></div>
}
