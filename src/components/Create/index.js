import React from "react"
import "./Create.css"
import CreateChoice from "src/components/Create/CreateChoice"

const Create = () => (
  <div className="Create flex flex-col justify-between items-center bg-gray-900 h-screen w-screen ">
    <h1>ICI SERA PRESENT LE SYSTEME DE DRAG AND DROP</h1>
    <CreateChoice />
  </div>
)

export default Create
