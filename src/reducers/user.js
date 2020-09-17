import { SET_AVATAR } from "src/actions/user"

export const initialState = {
  imgFile: "/assets/img/default_avatar.png",
}

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_AVATAR: {
      return {
        ...state,
        imgFile: action.imgFile,
      }
    }
    default:
      return state
  }
}

export default user
