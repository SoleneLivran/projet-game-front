import axios from "axios"
import { FETCH_STORY, setScene, NEXT_SCENE } from "src/actions/gameinterface"

const auth = (store) => (next) => (action) => {
  const state = store.getState()
  switch (action.type) {
    case FETCH_STORY: {
      axios
        .get("http://ec2-18-234-186-84.compute-1.amazonaws.com/api/public/stories/1")
        .then((response) => {
          console.log(response.data.firstScene)
          store.dispatch(setScene(response.data.firstScene))
        })
        .catch((error) => {
          console.log(error)
        })
      break
    }
    case NEXT_SCENE: {
      axios
        .get(
          `http://ec2-18-234-186-84.compute-1.amazonaws.com/api/transitions/${action.nextSceneId}/next_scene`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }
        )
        .then((response) => {
          console.log(response)
          store.dispatch(setScene(response.data))
        })
        .catch((error) => {
          console.log(error)
        })
    }
    default:
      next(action)
  }
}

export default auth
