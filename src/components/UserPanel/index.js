import React from "react"
import "./styles.css"

const UserPanel = () => (
  <div className="user-panel">
    <div className="user-panel__img h-24 w-24 rounded-full bg-contain bg-center" />
    <div>
      <p className="user-panel__content h-24 w-full bg-gray-900 text-white text-lg font-bold">
        Bienvenue, jeune aventurier.
      </p>
    </div>
  </div>
)

export default UserPanel
