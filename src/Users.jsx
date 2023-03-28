import {useState} from 'react'
import {useSyncExternalStore} from 'react'
import store from './store'

const User = () => {
  const storeValue = useSyncExternalStore(store.subscribe, store.getState)
  const [input, setInput] = useState('')

  const register = () => {
    store.dispatch({type: 'register', payload: input})
  }

  return (
    <div>
      <ul>
        {storeValue.user.users.map((user, idx) => (
          <li key={idx}>{user}</li>
        ))}
      </ul>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={register}>register</button>
    </div>
  )
}

export default User
