import React from "react"
import "./CreateGame.css"
import CreateGame from "src/components/Create/CreateGame"

const Create = () => (
  <div className="Create flex flex-col justify-between items-center bg-gray-900 h-full w-screen ">
    <CreateGame />
  </div>
)

export default Create
