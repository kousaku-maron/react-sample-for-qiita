import { createStore, combineReducers } from 'redux'
import { CardReducer, CardState } from './reducers/cardReducer'

export interface AppState {
  card: CardState
}

const configureStore = () => {
  const _store = createStore(
    combineReducers<AppState>({
      card: CardReducer,
    }),
    {},
  )
  
  return _store
}

const store = configureStore()

export default store