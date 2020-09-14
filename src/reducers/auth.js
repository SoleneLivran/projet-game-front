import { CHANGE_INPUT, SAVE_USER, SAVE_NEW_USER } from "src/actions/auth"

export const initialState = {
  pseudo: "",
  email: "",
  password: "",
  passwordCheck: "",
  isSignedUp: false,
  isLogged: false,
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
    case SAVE_NEW_USER: {
      // return the state and clean previous input for secure
      // isSignedUp false -> true fore redirection
      return {
        ...state,
        pseudo: "",
        email: "",
        password: "",
        passwordCheck: "",
        isSignedUp: true,
      }
    }
    default:
      return state
  }
}

export default auth
