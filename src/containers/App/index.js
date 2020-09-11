import { connect } from "react-redux"
import App from "src/components/App/index"
import { fetchPopularStories } from "src/actions/app"

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => ({
  fetchPopularStories: () => {
    dispatch(fetchPopularStories())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
