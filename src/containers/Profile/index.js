import { connect } from "react-redux"
import Profile from "src/components/Profile/index"
import { fetchUser, userEdit } from "src/actions/user"
import { deleteUser } from "src/actions/auth"

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
  handleUserEdit: () => {
    dispatch(userEdit())
  },
  handleDeleteUser: () => {
    dispatch(deleteUser())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
