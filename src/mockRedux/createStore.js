const createStore = (reducer) => {
  let listeners = []
  let currentState = {}

  const dispatch = (action) => {
    currentState = reducer(currentState, action)

    listeners.forEach((listener) => listener())
  }

  const getState = () => {
    return currentState
  }

  const subscribe = (cb) => {
    let isSubscribe = true
    listeners.push(cb)

    return function unsubscribe() {
      if (!isSubscribe) return
      isSubscribe = false

      listeners = listeners.filter((listener) => listener !== cb)
    }
  }

  dispatch({type: Math.random()})

  return {
    subscribe,
    getState,
    dispatch
  }
}

export default createStore
