import { FETCH_POPULAR_STORIES } from "src/actions/app"

const app = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POPULAR_STORIES: {
      console.log("Je fetch les stories popular")
    }
    default:
      next(action)
  }
}

export default app
