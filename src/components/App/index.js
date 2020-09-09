import React from "react"
import "./App.css"
import Nav from "src/components/Nav/index"
import Create from "src/components/Create/index"

const App = () => (
  <div className="App bg-gray-900 h-full w-screen ">
    <Nav />
    <Create />
  </div>
)

export default App
