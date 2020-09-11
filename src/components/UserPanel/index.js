import React from "react"
import "./styles.css"

const UserPanel = () => (
  <div className="user-panel">
    <div className="h-24 w-full bg-gray-900 text-white flex items-center justify-between rounded-l-full">
      <div className="user-panel__img h-24 w-24 rounded-full bg-contain bg-center" />
      <p className="user-panel__content w-48 ml-6 mr-auto text-xl font-bold">
        Bienvenue, <br /> jeune aventurier.
      </p>
      <div className="user-panel__buttons mr-auto">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Inscription
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Connexion
        </button>
      </div>
    </div>
  </div>
)

export default UserPanel
