export const initialState = {
  listPopular: [],
  listLastest: [],
  loadingPopular: true,
}

const home = (state = initialState, action = {}) => {
  switch (action.type) {
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
