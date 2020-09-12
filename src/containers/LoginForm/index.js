import { connect } from "react-redux"
import LoginForm from "src/components/LoginForm/index"
import { login } from "src/actions/auth"

const mapStateToProps = null

const mapDispatchToProps = (dispatch, ownProps) => ({
  // dispatch in auth actions
  handleLogin: () => {
    dispatch(login())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
