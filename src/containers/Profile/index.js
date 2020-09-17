import { connect } from "react-redux"
import Profile from "src/components/Profile/index"
import { fetchUser } from "src/actions/user"

const mapStateToProps = (state) => ({
  connectedId: state.auth.connectedId,
  avatar: state.user.avatar,
  name: state.user.name,
  mail: state.user.mail,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => {
    dispatch(fetchUser())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
