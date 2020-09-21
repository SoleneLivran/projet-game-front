import { connect } from "react-redux"
import GameInterface from "src/components/GameInterface/index"
import { fetchStory, nextScene } from "src/actions/gameinterface"

const mapStateToProps = (state) => ({
  place: state.gameinterface.place,
  event: state.gameinterface.event,
  transitions: state.gameinterface.transitions,
})

const mapDispatchToProps = (dispatch) => ({
  fetchStory: (storyId) => {
    dispatch(fetchStory(storyId))
  },

  nextScene: (nextSceneId) => {
    dispatch(nextScene(nextSceneId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(GameInterface)
