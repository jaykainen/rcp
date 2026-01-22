import type {Action} from 'redux'

export type State = boolean

export type SetLoadingAction = Action<'@loading/setLoadingAction'> & {
  payload: boolean
}

export type Actions = SetLoadingAction
