import axios from "axios"
import { FETCH_STORY } from "src/actions/gameinterface"

const auth = (store) => (next) => (action) => {
  // const state = store.getState()
  switch (action.type) {
    case FETCH_STORY: {
      axios
        .get("http://ec2-18-234-186-84.compute-1.amazonaws.com/api/public/stories/1")
        .then((response) => {
          console.log(response.data.firstScene)
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

export default auth
