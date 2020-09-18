import { SHOW_LOADING_POPULAR } from "src/actions/home"

export const initialState = {
  listPopular: [],
  listLastest: [],
  loadingPopular: true,
}

const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_LOADING_POPULAR: {
      return {
        ...state,
        loadingPopular: true,
      }
    }
    case "SAVE_POPULAR_STORIES": {
      return {
        ...state,
        listPopular: action.popularStories,
        loadingPopular: false,
      }
    }
    default:
      return state
  }
}

export default home
