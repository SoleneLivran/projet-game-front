import axios from "axios"
import { FETCH_POPULAR_STORIES, savePopularStories } from "src/actions/app"

const app = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POPULAR_STORIES: {
      console.log("Middleware: Je fetch les stories popular")
      axios
        .get(
          "http://ec2-18-234-186-84.compute-1.amazonaws.com/projet-jeu/gwith_back/public/api/stories",
          {
            headers: {
            },
          }
        )
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error);
        })
      store.dispatch(savePopularStories())
    }
    default:
      next(action)
  }
}

export default app
