export const initialState = {
  listPopular: [],
  listLastest: [],
}

const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SAVE_POPULAR_STORIES": {
      return {
        ...state,
        listPopular: action.popularStories,
      }
    }
    default:
      return state
  }
}

export default home
