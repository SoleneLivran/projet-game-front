import axios from "axios"
import { FETCH_STORY, setScene, NEXT_SCENE } from "src/actions/gameinterface"

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_STORY: {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_BACK}/api/public/stories/${action.storyId}`
        )
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
          `${process.env.REACT_APP_SERVER_BACK}/api/transitions/${action.nextSceneId}/next_scene`,
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
      break
    }
    default:
      next(action)
  }
}

export default auth
