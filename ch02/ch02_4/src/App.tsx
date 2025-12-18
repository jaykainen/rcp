import P from './P'

export default function App() {
  //1.기본버전
  //const texts = [<p key="1">hello</p>, <p key="2">world</p>]
  //2. 향상된 버전
  // const texts = ['hello', 'world'].map((text, index) => (
  //   <p key={index} children={text}></p>
  // ))
  // return <div children={texts}></div>

  //3. P컴포넌트 사용
  const texts = ['hello', 'world'].map((text, index) => <P key={index} children={text} />)
  return <div children={texts}></div>
}
