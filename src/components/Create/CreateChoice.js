import React, { Component } from "react"
import ReactDOM from "react-dom"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}`,
    content: `Action ${k + offset}`,
    description: `Descrition du module`,
  }))

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

const grid = 8

class CreateChoice extends Component {
  state = {
    items: getItems(0),
    selected: getItems(3, 10),
  }

  id2List = {
    droppable: "items",
    droppable2: "selected",
  }

  getList = (id) => this.state[this.id2List[id]]

  onDragEnd = (result) => {
    const { source, destination } = result

    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      )

      let state = { items }

      if (source.droppableId === "droppable2") {
        state = { selected: items }
      }

      this.setState(state)
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      )

      this.setState({
        items: result.droppable,
        selected: result.droppable2,
      })
    }
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="flex justify-evenly mx-auto">
          <div className="select-none  my-4 w-48 h-48 rounded-lg bg-gray-200 mx-8 flex justify-center border-4 border-dashed border-gray-500 items-center text-gray-500 font-bold text-2xl">
            LIEU
          </div>
          <div className="select-none my-4 w-48 h-48 rounded-lg bg-gray-200 mx-8 flex justify-center border-4 border-dashed border-gray-500 items-center text-gray-500 font-bold text-2xl">
            EVENEMENT
          </div>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className="select-none flex flex-col my-4 w-full flex-1 h-48  rounded-lg bg-gray-200 mx-8 flex justify-center border-4 border-dashed border-gray-500 items-center text-gray-500 font-bold text-2xl"
              >
                ACTIONS
                <div className="flex">
                  {this.state.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="select-none  w-32 h-32 rounded-lg bg-gray-800 mx-8 flex justify-center items-center text-white font-bold text-2xl transform hover:-translate-y-3"
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <Droppable droppableId="droppable2" direction="horizontal">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} className="flex p-8">
              {this.state.selected.map((item, index) => (
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
    )
  }
}

export default CreateChoice
