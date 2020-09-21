import { SET_SCENE } from "src/actions/gameinterface"

export const initialState = {
  transitions: [],
  place: {},
  event: {},
}

const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SCENE: {
      return {
        ...state,
        transitions: action.transitions,
        place: action.place,
        event: action.event,
      }
    }
    default:
      return state
  }
}

export default home
