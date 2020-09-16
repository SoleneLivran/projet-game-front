import React from "react"

const Story = () => (
  <li className="stories__story mx-auto w-3/4 h-16 px-4 bg-gray-100 rounded-md flex justify-between items-center">
    <h2 className="stories__story-title overflow-x-auto w-64">Nom de l'histoire</h2>
    <div className="stories__story-options flex justify-around items-center w-48">
      <p className="stories__story-status text-xs bg-green-500 h-8 px-1 py-2 rounded-md">En ligne</p>
      {/* <p className="stories__story-status text-xs bg-blue-500 h-8 px-1 py-2 rounded-md">Brouillon</p> */}
      <button className="stories__story-edit bg-blue-400 rounded-full h-10 w-10">
        <i class="fas fa-edit" />
      </button>
      <button className="stories__story-delete bg-red-700 rounded-full h-10 w-10">
        <i class="fas fa-trash-alt" />
      </button>
    </div>
  </li>
)

export default Story
