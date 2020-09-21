import axios from "axios"
import {
  FETCH_POPULAR_STORIES,
  FETCH_LATEST_STORIES,
  savePopularStories,
  saveLatestStories,
} from "src/actions/home"

const home = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POPULAR_STORIES: {
      axios
        .get(
          "http://ec2-18-234-186-84.compute-1.amazonaws.com/api/public/stories/top_ten"
        )
        .then((response) => {
          store.dispatch(savePopularStories(response.data))
        })
        .catch((error) => {
          console.log(error)
        })
      break
    }
    case FETCH_LATEST_STORIES: {
      axios
        .get(
          "http://ec2-18-234-186-84.compute-1.amazonaws.com/api/public/stories/latest_ten"
        )
        .then((response) => {
          store.dispatch(saveLatestStories(response.data))
        })
        .catch((error) => {
          console.log(error)
        })
      break
    }
    default:
      next(action)
  }
}

export default home
