import type {Action} from 'redux'

//이 액션의 구분자는 반드시 setToday라는 문자열이어야 한다
export type SetTodayAction = Action<'setToday'> & {
  today: Date //이 액션이 전달될때 today라는 키에 Date 객체 형식의 데이터가 반드시 포함되어야 한다
}

export type Actions = SetTodayAction
