import axios from "axios"
import { LOGIN, saveUser } from "src/actions/auth"

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // access data in store
      const state = store.getState()
      store.dispatch(saveUser())
    }
    default:
      next(action)
  }
}

export default auth
