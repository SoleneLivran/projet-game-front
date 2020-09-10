import { FETCH_POPULAR_STORIES, savePopularStories } from "src/actions/app"

const app = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POPULAR_STORIES: {
      console.log("Middleware: Je fetch les stories popular")
      store.dispatch(savePopularStories())
    }
    default:
      next(action)
  }
}

export default app
