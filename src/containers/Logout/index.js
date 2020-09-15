import { connect } from "react-redux"
import Logout from "src/components/Logout/index"
import { logout } from "src/actions/auth"

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
