import { connect } from "react-redux"
import Field from "src/components/Field/index"
import { login } from "src/actions/auth"

const mapStateToProps = null

const mapDispatchToProps = (dispatch, ownProps) => ({
  // dispatch in auth actions
  handleValue: () => {
    dispatch(login())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Field)
