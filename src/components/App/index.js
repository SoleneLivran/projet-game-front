import React from "react"
import "./App.css"
import Nav from "src/components/Nav/index"
import Home from "src/components/Home/index"

const App = () => (
  <div className="app bg-center bg-cover h-auto w-screen ">
    <Nav />
    <Home />
  </div>
)

export default App
