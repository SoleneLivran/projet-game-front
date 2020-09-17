import React, { useEffect } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import PropTypes from "prop-types"
import "./App.css"

import Nav from "src/containers/Nav/index"
import Home from "src/containers/Home/index"
import LoginForm from "src/containers/LoginForm/index"
import SignupForm from "src/containers/SignupForm/index"
import Logout from "src/containers/Logout/index"
import Profile from "src/containers/Profile/index"

const App = ({ checkIsLogged, isLogged }) => {
  //
  useEffect(checkIsLogged, [])

  return (
    <div className="app bg-center bg-cover h-auto w-full ">
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        {isLogged && <Route path="/logout" component={Logout} />}
        {isLogged && <Route path="/profile/:slug" component={Profile} />}
        {/* <Redirect to="/" /> */}
      </Switch>
    </div>
  )
}

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
  connectedId: PropTypes.number.isRequired,
}
export default App
