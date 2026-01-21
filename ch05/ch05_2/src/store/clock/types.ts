import type {Action} from 'redux'

//모든 리덕스 액션은 최소한 type 필드를 가져야 한다!!!
//{type:'@clock/setClock', payload: '2024-06-01T12:00:00Z'} 이런 형태로 보내기 위함

export type State = string //State라는 신규 타입은 문자열 타입과 똑같다. 즉 문자열타입이다.

export type SetClockAction = Action<'@clock/setClock'> & {
  payload: State //payload는 단순히 암묵적으로 사용하는 명칭. aaa여도 상관없음.
  // 액션이 일어날때 전달할 데이터는 문자열이다.
}
export type Actions = SetClockAction
