import { connect } from "react-redux"
import Home from "src/components/Home/index"
import { fetchPopularStories, fetchLatestStories } from "src/actions/home"

const mapStateToProps = (state) => ({
  popularStories: state.home.listPopular,
  latestStories: state.home.listLatest,
})

const mapDispatchToProps = (dispatch) => ({
  fetchPopularStories: () => {
    dispatch(fetchPopularStories())
  },
  fetchLatestStories: () => {
    dispatch(fetchLatestStories())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
