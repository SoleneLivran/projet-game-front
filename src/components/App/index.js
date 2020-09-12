import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Route } from "react-router-dom"
import "./App.css"

import Nav from "src/components/Nav/index"
import Home from "src/containers/Home/index"
import Login from "src/components/Login/index"

const App = ({ fetchPopularStories }) => {
  useEffect(() => {
    fetchPopularStories()
  }, [])

  return (
    <div className="app bg-center bg-cover h-auto w-screen ">
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
    </div>
  )
}

App.propTypes = {
  fetchPopularStories: PropTypes.func.isRequired,
}
export default App
