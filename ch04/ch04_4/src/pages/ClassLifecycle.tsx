import {Component} from 'react'
import {Title} from '../components'

export default class ClassLifecycle extends Component {
  //클래스 컴포넌트의 상태는 항상 state 라는 이름의 멤버 속성으로 구현해야 한다는 제약 조건 있음!!!!
  state = {
    today: new Date(),
    intervalId: null as unknown as NodeJS.Timer
    //null만 세팅하면 TS는 타입이 null이라 생각하기 때문에 추후에 setState할 때 타입 오류 발생함
    //또한 null에서 NodeJs.Timer로는 타입이 많이 달라 한번에 변경 불가능!!!
    //그래서 모든 타입의 최상위 개념인 unknown으로 신분세탁후 NodeJS.Timer 타입으로 다시 변신시켜줌
    //null as NodeJS.Timeout | null 도 가능하다 함...
  }

  //리액트 컴포넌트는 가상 Dom객체 형태로 생성되어 어떤 시점에 물리 Dom트리에 연결되는데 이 시점을 마운트(mount)라고 하고
  //마운트가 완료된 직후에 호출되는 생명주기 메서드가 componentDidMount
  componentDidMount() {
    const duration = 1000 //1초
    const intervalId = setInterval(() => {
      this.setState({today: new Date()})
    }, duration)
    this.setState({intervalId})
  }

  //리액트 컴포넌트가 물리 Dom트리에서 제거되는 시점을 언마운트(unmount)라고 하며
  //언마운트 되기 직전에 호출되는 생명주기 메서드가 componentWillUnmount
  componentWillUnmount() {
    clearInterval(this.state?.intervalId)
  }

  render() {
    const {today} = this.state
    return (
      <section className="mt-4">
        <Title>ClassLifecycle</Title>
        <div className="flex flex-col items-center mt-4">
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
        </div>
      </section>
    )
  }
}
