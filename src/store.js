import combineReducer from './mockRedux/combineReducers'
import createStore from './mockRedux/createStore'

const counterReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

const userReducer = (state = {users: []}, action) => {
  switch (action.type) {
    case 'register':
      return {
        users: [...state.users, action.payload]
      }
    default:
      return state
  }
}

const combinedReducer = combineReducer({
  counter: counterReducer,
  user: userReducer
})

const store = createStore(combinedReducer)

export default store
