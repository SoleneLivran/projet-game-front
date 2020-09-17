import { connect } from "react-redux"
import Home from "src/components/Home/index"
import { fetchPopularStories } from "src/actions/home"

const mapStateToProps = (state) => ({
  popularStories: state.home.listPopular,
  loadingPopular: state.home.loadingPopular,
})

const mapDispatchToProps = (dispatch) => ({
  fetchPopularStories: () => {
    dispatch(fetchPopularStories())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
