import { SET_AVATAR, SET_USER } from "src/actions/user"

export const initialState = {
  avatar: "default_avatar",
  name: "",
  mail: "",
}

const user = (state = initialState, action = {}) => {
  switch (action.type) {
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
        name: action.name,
        mail: action.mail,
        // avatar: action.avatar,
        avatar: "default_avatar",
      }
    }
    default:
      return state
  }
}

export default user
