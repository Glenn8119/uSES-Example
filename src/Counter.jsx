import {useSyncExternalStore} from 'react'
import store from './store'

const Counter = () => {
  const storeValue = useSyncExternalStore(store.subscribe, store.getState)

  const increment = () => {
    store.dispatch({type: 'increment'})
  }

  const decrement = () => {
    store.dispatch({type: 'decrement'})
  }

  return (
    <div>
      <div>{storeValue.counter.count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter
