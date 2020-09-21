import { connect } from "react-redux"
import LoginForm from "src/components/LoginForm/index"
import { login } from "src/actions/auth"

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
})

const mapDispatchToProps = (dispatch) => ({
  // dispatch in auth actions
  handleLogin: () => {
    dispatch(login())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
