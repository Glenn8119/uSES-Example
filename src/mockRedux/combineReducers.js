const combineReducers = (reducersObj) => {
  const reducersObjKeys = Object.keys(reducersObj)

  return function combinedReducer(currentState, action) {
    let isStateChanged
    let nextState = {}

    for (let i = 0; i < reducersObjKeys.length; i++) {
      const key = reducersObjKeys[i]
      const reducer = reducersObj[key]
      let prevStateForKey = currentState[key]
      let nextStateForKey = reducer(prevStateForKey, action)

      nextState[key] = nextStateForKey
      isStateChanged = isStateChanged || prevStateForKey !== nextStateForKey
    }

    return isStateChanged ? nextState : currentState
  }
}

export default combineReducer
