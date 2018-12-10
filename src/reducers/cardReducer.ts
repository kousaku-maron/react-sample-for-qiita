import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { CardActions } from '../actions/CardAction'

export interface CardState {
  open: boolean
}

const initialState: CardState = {
  open: false,
}

export const CardReducer = reducerWithInitialState(initialState)
.case(CardActions.open, (state, payload) =>
  Object.assign({}, state, { open: open })
)
.case(CardActions.close, (state, payload) =>
  Object.assign({}, state, { open: false })
)
