import React from "react"

const Story = ({ id, title, status, handleModalDeleteStory }) => {
  return (
    <li className="stories__story cursor-pointer mx-auto my-4 h-16 px-4 bg-gray-100 rounded-md flex justify-between items-center">
      <h2 className="stories__story-title overflow-auto h-12 py-3">{title}</h2>
      <div className="stories__story-options flex justify-around items-center w-48">
        <p className="stories__story-status text-xs bg-green-500 h-8 px-1 py-2 w-20 rounded-md m-1 text-center">
          {status === 1 ? "Publiée" : "Brouillon"}
        </p>
        <button className="stories__story-edit bg-blue-400 rounded-full h-10 w-10 m-1">
          <i className="fas fa-edit" />
        </button>
        <button
          onClick={() => handleModalDeleteStory(id)}
          className="stories__story-delete bg-red-700 rounded-full h-10 w-10 m-1"
        >
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </li>
  )
}
export default Story
