import { connect } from "react-redux"
import SignupForm from "src/components/SignupForm/index"

const mapStateToProps = (state) => ({
  pseudo: state.auth.pseudo,
  email: state.auth.email,
  password: state.auth.password,
  passwordCheck: state.auth.passwordCheck,
})

const mapDispatchToProps = (dispatch) => ({
  // dispatch in auth actions
  handleSignup: () => {
    // dispatch(signup())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
