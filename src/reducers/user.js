import {
  SET_USER,
  CHANGE_USER_INPUT,
  CLEAR_EDIT,
  CLEAR_USER_INPUT,
} from "src/actions/user"

export const initialState = {
  avatar: "",
  username: "",
  email: "",
  password: "",
  newPassword: "",
}

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_INPUT: {
      return {
        ...state,
        [action.key]: action.value,
      }
    }
    case SET_USER: {
      return {
        ...state,
        username: action.name,
        email: action.mail,
        avatar: action.avatar,
        password: "",
        newPassword: "",
      }
    }
    case CLEAR_EDIT: {
      return {
        ...state,
        password: "",
      }
    }
    case CLEAR_USER_INPUT: {
      return {
        ...state,
        [action.key]: "",
      }
    }
    default:
      return state
  }
}

export default user
