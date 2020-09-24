import { connect } from "react-redux"
import FieldProfile from "src/components/Profile/FieldProfile/index"
import { changeUserValue, clearUserInput } from "src/actions/user"

const mapStateToProps = (state, ownProps) => ({
  // ownProps to access about props component
  inputValue: state.user[ownProps.name],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // dispatch in auth actions
  setInputValue: (value) => {
    dispatch(changeUserValue(value, ownProps.name))
  },
  clearUserInput: () => {
    dispatch(clearUserInput(ownProps.name))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(FieldProfile)
