import axios from "axios"
import { FETCH_USER } from "src/actions/user"

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER: {
      console.log("Je suis dans la page user")
    }
    default:
      next(action)
  }
}

export default user
