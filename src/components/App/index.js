import React, { useEffect, useState } from "react"
import { Redirect, Route, Switch, useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import lodash from "lodash"

// import { displayNav } from "src/selectors/app"

import "./App.css"

import Nav from "src/containers/Nav/index"
import Home from "src/containers/Home/index"
import LoginForm from "src/containers/LoginForm/index"
import SignupForm from "src/containers/SignupForm/index"
import Logout from "src/containers/Logout/index"
import Profile from "src/containers/Profile/index"
import GameInterface from "src/containers/GameInterface/index"
import GameList from "src/components/GameList/index"
import Create from "src/components/Create/index"
import About from "src/components/About/index"
import Contact from "src/components/Contact/index"
import NotFound from "src/components/NotFound/index"

const App = ({ checkIsLogged, isLogged }) => {
  const location = useLocation().pathname
  const [showNav, setShowNav] = useState(true)

  const displayNav = lodash.startsWith(location, "/letsplay")
  // visitor to user if jwt is here !
  useEffect(() => {
    if (displayNav) {
      setShowNav(false)
    } else {
      setShowNav(true)
    }

    checkIsLogged()
  }, [checkIsLogged, displayNav])
  return (
    <div className="app bg-center bg-cover h-screen w-full overflow-x-hidden">
      {showNav && <Nav />}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/gamelist" component={GameList} />
        {isLogged && <Route path="/create" component={Create} />}
        {isLogged && <Route path="/logout" component={Logout} />}
        {isLogged && <Route path="/profile/:slug" component={Profile} />}
        {isLogged && <Route path="/letsplay/:slug" component={GameInterface} />}
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
}
export default App
