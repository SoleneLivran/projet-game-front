import { connect } from "react-redux"
import App from "src/components/App/index"
import { checkIsLogged } from "src/actions/auth"

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => ({
  // Check if token is set, so the user is connected
  checkIsLogged: () => {
    dispatch(checkIsLogged())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
