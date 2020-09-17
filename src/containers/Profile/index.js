import { connect } from "react-redux"
import Profile from "src/components/Profile/index"
import {fetchUser} from "src/actions/user"

const mapStateToProps = (state) => ({
  connectedId: state.auth.connectedId,
  imgFile: state.user.imgFile,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => {
    dispatch(fetchUser())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
