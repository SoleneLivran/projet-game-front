import axios from "axios"
import { LOGIN, saveUser, SIGNUP, saveNewUser } from "src/actions/auth"

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // access data in store
      const state = store.getState()
      // axios'll come here
      // after receive the correct status response from POST request:
      store.dispatch(saveUser())
      break
    }
    case SIGNUP: {
      // access data in store
      const state = store.getState()
      const newUser = {
        pseudo: state.auth.pseudo,
        email: state.auth.email,
        password: state.auth.password,
      }
      store.dispatch(saveNewUser())
      // console.log(JSON.stringify(newUser))
      // axios'll come here
      // after receive the correct status response from POST request:
      break
    }
    default:
      next(action)
  }
}

export default auth
