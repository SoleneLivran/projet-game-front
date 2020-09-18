import { HIDE_NAV } from "src/actions/gameinterface"

export const initialState = {
  showNav: true,
}

const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case HIDE_NAV: {
      return {
        ...state,
        showNav: false,
      }
    }
    default:
      return state
  }
}

export default home
