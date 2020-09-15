import { connect } from "react-redux"
import Logout from "src/components/Logout/index"
import { login } from "src/actions/auth"

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
