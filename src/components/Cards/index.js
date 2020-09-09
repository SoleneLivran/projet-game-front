import React from "react"
import "./Cards.css"

const Cards = (props) => {
  return props.lieux.map((lieu) => (
    <div className=" Dragable w-48 h-64 rounded-lg bg-gray-800 mx-8 flex justify-center items-center text-white font-bold text-2xl ease-in-out duration-200 transform hover:-translate-y-3">
      {lieu.content}
    </div>
  ))
}

export default Cards
