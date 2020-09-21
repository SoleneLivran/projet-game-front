import React from "react"
import { Route } from "react-router-dom"
import "./App.css"

import Nav from "src/containers/Nav/index"
import Home from "src/containers/Home/index"
import LoginForm from "src/containers/LoginForm/index"
import SignupForm from "src/containers/SignupForm/index"
import Create from "src/components/Create/index"

const App = () => (
  <div className="app bg-center bg-cover h-auto w-screen ">
    <Nav />
    <Route path="/" component={Home} exact />
    <Route path="/login" component={LoginForm} exact />
    <Route path="/signup" component={SignupForm} exact />
    <Route path="/create" component={Create} exact />
  </div>
)
export default App
