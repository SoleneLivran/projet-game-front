import axios from "axios"
import { FETCH_USER, setUser, USER_EDIT, clearEdit } from "src/actions/user"

const user = (store) => (next) => (action) => {
  const state = store.getState()
  switch (action.type) {
    case FETCH_USER: {
      axios
        .get(
          `http://ec2-18-234-186-84.compute-1.amazonaws.com/api/app_users/${state.auth.connectedId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data)
          store.dispatch(setUser(response.data))
        })
        .catch((error) => {
          console.log(error)
        })
      break
    }
    case USER_EDIT: {
      axios
        .put(
          `http://ec2-18-234-186-84.compute-1.amazonaws.com/api/account/${state.auth.connectedId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
            name: state.user.username.toLowerCase().trim(),
            mail: state.user.email.toLowerCase().trim(),
            password: state.user.password.trim(),
          }
        )
        .then((response) => {
          store.dispatch(clearEdit())
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

export default user
