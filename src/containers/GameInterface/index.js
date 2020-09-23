import { connect } from "react-redux"
import GameInterface from "src/components/GameInterface/index"
import { fetchStory, nextScene, clearPreviousGame } from "src/actions/gameinterface"

const mapStateToProps = (state) => ({
  place: state.gameinterface.place,
  event: state.gameinterface.event,
  transitions: state.gameinterface.transitions,
  isEnd: state.gameinterface.isEnd,
})

const mapDispatchToProps = (dispatch) => ({
  fetchStory: (storyId) => {
    dispatch(fetchStory(storyId))
  },

  nextScene: (nextSceneId) => {
    dispatch(nextScene(nextSceneId))
  },

  clearPreviousGame: () => {
    dispatch(clearPreviousGame())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(GameInterface)
