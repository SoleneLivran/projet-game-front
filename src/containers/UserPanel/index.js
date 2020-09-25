import { connect } from "react-redux"
import UserPanel from "src/components/UserPanel/index"

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  connectedId: state.auth.connectedId,
  username: state.auth.username,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel)
