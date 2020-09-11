import axios from "axios"
import { FETCH_POPULAR_STORIES, savePopularStories } from "src/actions/app"

const app = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POPULAR_STORIES: {
      axios
        .get("http://ec2-18-234-186-84.compute-1.amazonaws.com/api/stories/top_ten/")
        .then((response) => {
          console.log(response)
          store.dispatch(savePopularStories(response.data))
        })
        .catch((error) => {
          console.log(error)
        })
    }
    default:
      next(action)
  }
}

export default app
