import { connect } from "react-redux"
import Field from "src/components/Field/index"
import { changeValue, clearInput } from "src/actions/auth"

const mapStateToProps = (state, ownProps) => ({
  // ownProps to access about props component
  inputValue: state.auth[ownProps.name],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // dispatch in auth actions
  setInputValue: (value) => {
    dispatch(changeValue(value, ownProps.name))
  },

  clearInput: () => {
    dispatch(clearInput(ownProps.name))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Field)
