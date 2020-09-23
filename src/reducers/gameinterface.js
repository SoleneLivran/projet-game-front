import { SET_SCENE, CLEAR_PREVIOUS_GAME } from "src/actions/gameinterface"

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
    case CLEAR_PREVIOUS_GAME: {
      console.log("CLEAR");
      return {
        ...state,
        transitions: [],
        place: {},
        event: {},
      }
    }
    default:
      return state
  }
}

export default home
