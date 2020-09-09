import React from "react"
import "./Cards.css"
import { Draggable } from "react-beautiful-dnd"

const Cards = (props) => {
  return props.lieux.map((lieu, index) => (
    <Draggable draggableId={lieu.id} index={index}>
      {(provided, index) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className=" Dragable w-48 h-64 rounded-lg bg-gray-800 mx-8 flex justify-center items-center text-white font-bold text-2xl ease-in-out duration-200 transform hover:-translate-y-3"
        >
          {lieu.content}
        </div>
      )}
    </Draggable>
  ))
}

export default Cards

/**
 *
 *
 */
