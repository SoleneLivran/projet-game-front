import { SAVE_POPULAR_STORIES, SAVE_LATEST_STORIES } from "src/actions/home"

export const initialState = {
  listPopular: [],
  listLatest: [],
}

const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_POPULAR_STORIES: {
      return {
        ...state,
        listPopular: action.popularStories,
      }
    }
    case SAVE_LATEST_STORIES: {
      return {
        ...state,
        listLatest: action.latestStories,
      }
    }
    default:
      return state
  }
}

export default home
