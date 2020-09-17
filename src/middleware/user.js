import axios from "axios"
import { FETCH_USER, setUser } from "src/actions/user"

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
          store.dispatch(setUser(response.data))
        })
        .catch((error) => {
          console.log(error)
        })
    }
    default:
      next(action)
  }
}

export default user
