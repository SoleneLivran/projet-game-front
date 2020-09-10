export const initialState = {
  listPopular: [],
  listLastest: [],
}

const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SAVE_POPULAR_STORIES": {
      console.log("SAVE POPULAR STORIES");
      return {
        ...state,
      }
    }
    default:
      return state
  }
}

export default app