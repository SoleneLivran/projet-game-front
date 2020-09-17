import { connect } from "react-redux"
import Profile from "src/components/Profile/index"

const mapStateToProps = (state) => ({
  connectedId: state.auth.connectedId,
  imgFile: state.user.imgFile,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
