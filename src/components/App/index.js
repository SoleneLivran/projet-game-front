import React, { useEffect } from "react"
import PropTypes from "prop-types"
import "./App.css"
import Nav from "src/components/Nav/index"
import Home from "src/components/Home/index"

const App = ({ fetchPopularStories }) => {
  useEffect(() => {
    fetchPopularStories()
  }, [])

  return (
    <div className="app bg-center bg-cover h-auto w-screen ">
      <Nav />
      <Home />
    </div>
  )
}

App.propTypes = {
  fetchPopularStories: PropTypes.func.isRequired,
}
export default App
