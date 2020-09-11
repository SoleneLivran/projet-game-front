import React from "react"
import "./Create.css"
import CreateChoice from "src/components/Create/CreateChoice"

const Create = () => (
  <div className="Create flex flex-col justify-between items-center bg-gray-900 h-full w-screen ">
    <CreateChoice />
  </div>
)

export default Create
