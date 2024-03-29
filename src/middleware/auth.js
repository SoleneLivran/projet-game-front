import axios from "axios"
import jwt_decode from "jwt-decode"
import {
  LOGIN,
  saveUser,
  SIGNUP,
  saveNewUser,
  CHECK_IS_LOGGED,
} from "src/actions/auth"

const auth = (store) => (next) => (action) => {
  const state = store.getState()
  switch (action.type) {
    case LOGIN: {
      // access data in store
      axios
        .post(`${process.env.REACT_APP_SERVER_BACK}/api/login_check`, {
          username: state.auth.username.trim(),
          password: state.auth.password.trim(),
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("user", response.data.token)
            store.dispatch(saveUser(jwt_decode(localStorage.getItem("user"))))
          }
        })
        .catch((error) => {
          console.log(error.response.data)
        })
      break
    }
    case CHECK_IS_LOGGED: {
      if (localStorage.getItem("user") !== null) {
        store.dispatch(saveUser(jwt_decode(localStorage.getItem("user"))))
      }
      break
    }
    case SIGNUP: {
      axios
        .post(`${process.env.REACT_APP_SERVER_BACK}/api/register`, {
          name: state.auth.username.toLowerCase().trim(),
          mail: state.auth.email.toLowerCase().trim(),
          password: state.auth.password.trim(),
        })
        .then((response) => {
          store.dispatch(saveNewUser())
        })
        .catch((error) => {
          console.log(error)
        })
      break
    }
    default:
      next(action)
  }
}

export default auth
