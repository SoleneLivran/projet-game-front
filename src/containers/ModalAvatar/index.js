import { connect } from "react-redux"
import ModalAvatar from "src/components/Profile/ModalAvatar/index"
import { setAvatar } from "src/actions/user"

const mapStateToProps = (state) => ({
  imgFile: state.user.imgFile,
})

const mapDispatchToProps = (dispatch) => ({
  setAvatar: (img) => {
    dispatch(setAvatar(img))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalAvatar)
