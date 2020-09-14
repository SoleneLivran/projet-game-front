import React from "react"
import { Route } from "react-router-dom"
import "./App.css"

import Nav from "src/components/Nav/index"
import Home from "src/containers/Home/index"
import LoginForm from "src/containers/LoginForm/index"

const App = () => (
  <div className="app bg-center bg-cover h-auto w-screen ">
    <Nav />
    <Route path="/" component={Home} exact />
    <Route path="/login" component={LoginForm} exact />
  </div>
)
export default App
