import axios from "axios"
import { FETCH_USER, setUser, USER_EDIT, clearEdit } from "src/actions/user"
import { saveUser } from "src/actions/auth"
import jwt_decode from "jwt-decode"

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
          // 1rst arg = url
          `http://ec2-18-234-186-84.compute-1.amazonaws.com/api/account/${state.auth.connectedId}`,
          // 2e arg = body
          {
            newName: state.user.username.toLowerCase().trim(),
            newMail: state.user.email.toLowerCase().trim(),
            oldPassword: state.user.password.trim(),
            newPassword: state.user.newPassword.trim(),
          },
          // 3e arg = options (including headers)
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }
        )
        .then((response) => {
          axios
            .post(
              "http://ec2-18-234-186-84.compute-1.amazonaws.com/api/login_check",
              {
                username: state.user.username.trim(),
                password:
                  state.user.newPassword === ""
                    ? state.user.password.trim()
                    : state.user.newPassword.trim(),
              }
            )
            .then((response) => {
              if (response.status === 200) {
                localStorage.setItem("user", response.data.token)
                store.dispatch(saveUser(jwt_decode(localStorage.getItem("user"))))
              }
            })
            .catch((error) => {
              console.log(error)
            })
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          store.dispatch(clearEdit())
        })
      break
    }
    default:
      next(action)
  }
}

export default user
