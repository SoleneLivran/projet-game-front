import { SET_AVATAR, SET_USER, CHANGE_USER_INPUT } from "src/actions/user"

export const initialState = {
  avatar: "default_avatar",
  username: "",
  email: "",
}

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_INPUT: {
      return {
        ...state,
        [action.key]: action.value,
      }
    }
    case SET_AVATAR: {
      return {
        ...state,
        avatar: action.imgFile,
      }
    }
    case SET_USER: {
      console.log("SET_USER")
      return {
        ...state,
        username: action.name,
        email: action.mail,
        // avatar: action.avatar,
        avatar: "default_avatar",
      }
    }
    default:
      return state
  }
}

export default user
