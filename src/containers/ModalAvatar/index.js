import { connect } from "react-redux"
import ModalAvatar from "src/components/Profile/ModalAvatar/index"
import { setAvatar } from "src/actions/user"

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => ({
  setAvatar: (img) => {
    dispatch(setAvatar(img))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalAvatar)
