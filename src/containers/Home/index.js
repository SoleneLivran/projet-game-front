import { connect } from "react-redux"
import Home from "src/components/Home/index"
import { fetchPopularStories, showLoadingPopular } from "src/actions/home"

const mapStateToProps = (state) => ({
  popularStories: state.home.listPopular,
  loadingPopular: state.home.loadingPopular,
})

const mapDispatchToProps = (dispatch) => ({
  showLoadingPopular: () => {
    dispatch(showLoadingPopular())
  },

  fetchPopularStories: () => {
    dispatch(fetchPopularStories())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
