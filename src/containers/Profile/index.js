import { connect } from "react-redux"
import Profile from "src/components/Profile/index"

const mapStateToProps = (state) => ({
  imgFile: state.user.imgFile,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
