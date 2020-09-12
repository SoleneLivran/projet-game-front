import { CHANGE_INPUT } from "src/actions/auth"

export const initialState = {
  email: "",
  password: "",
}

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      return {
        ...state,
        [action.key]: action.value,
      }
    }
    default:
      return state
  }
}

export default auth
