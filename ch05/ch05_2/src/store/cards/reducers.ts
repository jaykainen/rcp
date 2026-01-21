import * as T from './types'

const initialState: T.State = []

//리듀서의 역할 : 현재상태와 액션을 받아서 새로운 상태를 스토어에 전달(반드시 신규 객체여야 함!!! 안 그러면 리덕스가 변화감지 못함)
//스토어의 역할 : 리듀서가 반환한 신규 상태를 state에 저장
//컴포넌트는 useSelector를 통해 랜더링함
export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@cards/addCard':
      return [action.payload, ...state]
    case '@cards/removeCard': //삭제할 ID만 빼고 신규 객체로 만들어서 리턴함
      return state.filter(card => card.uuid !== action.payload)
    default:
      return state
  }
}
