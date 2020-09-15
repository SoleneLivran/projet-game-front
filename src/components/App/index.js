import React, { useEffect } from "react"
import { Route } from "react-router-dom"
import PropTypes from "prop-types"
import "./App.css"

import Nav from "src/containers/Nav/index"
import Home from "src/containers/Home/index"
import LoginForm from "src/containers/LoginForm/index"
import SignupForm from "src/containers/SignupForm/index"

const App = ({ checkIsLogged }) => {
  //
  useEffect(() => {
    checkIsLogged()
  })
  return (
    <div className="app bg-center bg-cover h-auto w-screen ">
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/login" component={LoginForm} exact />
      <Route path="/signup" component={SignupForm} exact />
    </div>
  )
}

App.propTypes = {
  checkIsLogged: PropTypes.func.isRequired,
}
export default App
