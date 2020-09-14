import { CHANGE_INPUT, SAVE_USER } from "src/actions/auth"

export const initialState = {
  pseudo: "",
  email: "",
  password: "",
  passwordCheck: "",
}

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      return {
        ...state,
        [action.key]: action.value,
      }
    }
    case SAVE_USER: {
      // return the state and clean previous input for secure
      return {
        ...state,
        email: "",
        password: "",
      }
    }
    default:
      return state
  }
}

export default auth
