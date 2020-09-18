import { CHANGE_INPUT, SAVE_USER, SAVE_NEW_USER, LOGOUT } from "src/actions/auth"

export const initialState = {
  username: "",
  email: "",
  password: "",
  passwordCheck: "",
  isLogged: false,
  connectedId: null,
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
      // return the state after login and clean previous input for secure
      return {
        ...state,
        username: action.username,
        password: "",
        connectedId: action.id,
        isLogged: true,
      }
    }
    case SAVE_NEW_USER: {
      // return the state and clean previous input for secure
      // isSignedUp false -> true fore redirection
      return {
        ...state,
        username: "",
        email: "",
        password: "",
        passwordCheck: "",
      }
    }
    case LOGOUT: {
      return {
        ...state,
        username: "",
        isLogged: false,
      }
    }
    default:
      return state
  }
}

export default auth
