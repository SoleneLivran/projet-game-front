import React from "react"
import "./styles.css"

const UserPanel = () => (
  <div className="user-panel h-24 w-full bg-gray-900 text-white flex items-center justify-between rounded-l-full md:flex-col md:rounded-none md:relative md:justify-center md:text-center">
    <div className="user-panel__img h-24 w-24 rounded-full bg-contain bg-center md:absolute md:h-48 md:w-48 md:bg-cover" />
    <p className="user-panel__content w-48 ml-6 mr-auto text-xl font-bold md:mt-16 md:mr-0 md:ml-0 md:mb-6">
      Bienvenue, <br /> jeune aventurier.
    </p>
    <div className="user-panel__buttons mr-auto md:mr-0 md:mt-2 md:flex md:flex-col xl:flex-row xl:justify-around xl:w-full xl:h-16">
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 md:mx-0 md:mb-2 xl:mb-0 xl:px-8"
      >
        Inscription
      </button>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded xl:px-8"
      >
        Connexion
      </button>
    </div>
  </div>
)

export default UserPanel
