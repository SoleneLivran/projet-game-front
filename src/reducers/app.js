export const initialState = {
  listPopular: [],
  listLastest: [],
}

const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SAVE_POPULAR_STORIES": {
      console.log("App reducer: SAVE POPULAR STORIES")
      return {
        ...state,
        listPopular: action.popularStories,
      }
    }
    default:
      return state
  }
}

export default app
