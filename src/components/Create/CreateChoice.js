import React, { Component } from "react"
import ReactDOM from "react-dom"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import "./Create.css"

const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `Lieu ${k}`,
    description: `Description du Lieu`,
  }))

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const grid = 8

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  display: "flex",
  padding: grid,
  overflow: "auto",
})

class CreateChoice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: getItems(6),
    }
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  id2List = {
    droppable: "items",
    droppable2: "selected",
  }

  onDragEnd(result) {
    if (!result.destination) {
      return
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    )

    this.setState({
      items,
    })
  }

  render() {
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="flex justify-center mx-auto">
            <Droppable droppableId="droppable" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="select-none my-4 w-48 h-48 rounded-lg bg-gray-200 mx-8 flex justify-center border-4 border-dashed border-gray-500 items-center text-gray-500 font-bold text-2xl"
                >
                  LIEU
                </div>
              )}
            </Droppable>
            <div className="select-none my-4 w-48 h-48 rounded-lg bg-gray-200 mx-8 flex justify-center border-4 border-dashed border-gray-500 items-center text-gray-500 font-bold text-2xl">
              EVENEMENT
            </div>
            <div className="select-none my-4 w-48 h-48 rounded-lg bg-gray-200 mx-8 flex justify-center border-4 border-dashed border-gray-500 items-center text-gray-500 font-bold text-2xl">
              ACTIONS
            </div>
          </div>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className="flex p-8"
                {...provided.droppableProps}
              >
                {this.state.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="select-none w-48 h-64 rounded-lg bg-gray-800 mx-8 flex justify-center items-center text-white font-bold text-2xl transform hover:-translate-y-3"
                      >
                        <div className="flex flex-col">
                          <p> {item.content}</p>
                          <p className="text-lg font-normal">{item.description}</p>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    )
  }
}

export default CreateChoice
