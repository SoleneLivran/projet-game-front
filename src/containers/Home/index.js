import { connect } from "react-redux"
import Home from "src/components/Home/index"

const mapStateToProps = (state) => ({
  popularStories: state.app.listPopular,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
