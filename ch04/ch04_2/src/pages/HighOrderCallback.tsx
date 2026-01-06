import {useMemo, useCallback} from 'react'
import {Title} from '../components'
import {Button} from '../theme/daisyui'
import * as D from '../data'

export default function Callback() {
  //1번-3번, 2번-4번 형태로 써야함
  //1번-4번, 2번-3번 형태로 쓰면 : React가 컴포넌트 랜더링시 즉시 실행되서 user가 클릭하지도 않았는데 계속 alert뜸. 클릭하게 되도 반환값이 undefined임!! 그래서 클릭시 아무일도 안 일어남

  //1번 방식 : 고차함수 사용
  const onClick = useCallback((name: string) => () => alert(`${name} button clicked`), [])

  //2번 방식 : 그냥함수 사용
  //const onClick = useCallback((name: string) => alert(`${name} button clicked`), [])

  //1번 방식에서 name을 가져올수 있는 이유.
  //자신만의 name을 기억하는(혹은 갖고있는) 클로저라는 개념 때문!!!
  /*
  const onClick = (name) => {
    //이 내부 공간 (Scope)에 name값이 저장됨
    return () => { //최초 선언 이후 클릭시부터 계속 이부분이 실행됨!!!!!!!!
        
      //내부 함수가 밖으로 나갈 때, 자신이 태어난 환경(name값)을 가방에 담아서 나간다... 라고 제미나이가 알려줌
      alert(`${name} button clicked`)
    }
  */

  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            //3번 방식
            onClick={onClick(name)}
            //4번 방식
            //onClick={() => onClick(name)}
            className="btn-primary btn-wide btn-xs">
            {name}
          </Button>
        )),
    [onClick]
  )

  return (
    <div className="mt-4">
      <Title>Callback</Title>
      <div className="flex mt-4 justify-evenly">{buttons}</div>
    </div>
  )
}
