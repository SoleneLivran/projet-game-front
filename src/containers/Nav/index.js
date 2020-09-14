import { connect } from "react-redux"
import Nav from "src/components/Nav/index"

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
