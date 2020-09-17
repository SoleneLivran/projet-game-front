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
        .post("http://ec2-18-234-186-84.compute-1.amazonaws.com/api/login_check", {
          username: state.auth.username,
          password: state.auth.password,
        })
        .then((response) => {
          console.log(response.data)
          if (response.status === 200) {
            localStorage.setItem("user", response.data.token)
            store.dispatch(saveUser(jwt_decode(localStorage.getItem("user"))))
          }
        })
        .catch((error) => {
          console.log(error)
        })
      break
    }
    case CHECK_IS_LOGGED: {
      if (localStorage.getItem("user") !== null) {
        console.log(jwt_decode(localStorage.getItem("user")))
        store.dispatch(saveUser(jwt_decode(localStorage.getItem("user"))))
      }
      break
    }
    case SIGNUP: {
      axios
        .post("http://ec2-18-234-186-84.compute-1.amazonaws.com/api/register", {
          name: state.auth.username.toLowerCase(),
          mail: state.auth.email.toLowerCase(),
          password: state.auth.password,
        })
        .then((response) => {
          console.log(response)
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
