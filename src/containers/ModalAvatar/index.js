import { connect } from "react-redux"
import ModalAvatar from "src/components/Profile/ModalAvatar/index"
import { setAvatar } from "src/actions/user"

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => ({
  setAvatar: (pictureFile, id) => {
    dispatch(setAvatar(pictureFile, id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalAvatar)
