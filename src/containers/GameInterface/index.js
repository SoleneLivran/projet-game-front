import { connect } from "react-redux"
import GameInterface from "src/components/GameInterface/index"
import { hideNav, fetchStory } from "src/actions/gameinterface"

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => ({
  hideNav: () => {
    dispatch(hideNav())
  },
  fetchStory: () => {
    dispatch(fetchStory())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(GameInterface)
