import React, { useState } from "react"
import "./Create.css"
import { render } from "react-dom"
import Cards from "src/components/Cards"
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

// fake data
const cardsNames = {
  // Our dragable items
  lieux: {
    "lieu-1": { id: 0, content: "Forêt" },
    "lieu-2": { id: 1, content: "Desert" },
    "lieu-3": { id: 2, content: "Taverne" },
  },
  // Column where the items are curently in
  columns: {
    "column-1": {
      id: "column-1",
      title: "select card",
      // We declare the ownership : lieu-1 is currently in column-1
      lieuIDs: ["lieu-1", "lieu-2", "lieu-3"],
    },
    // We define the column order
    columnOrder: ["column-1"],
  },
}

const CreateChoice = () => {
  const lieuState = cardsNames

  const cards = () => {
    return lieuState.columns.columnOrder.map((columnID) => {
      const column = lieuState.columns[columnID]
      const lieux = column.lieuIDs.map((lieuID) => lieuState.lieux[lieuID])
      return <Cards key={column.id} column={column} lieux={lieux} />
    })
  }
  return (
    <div className="DragDropContext Create bg-gray-300 shadow-lg  flex py-8 w-full ">
      <div className="Dropable flex">{cards()}</div>
    </div>
  )
}

export default CreateChoice
