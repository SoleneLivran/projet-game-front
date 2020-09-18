import React, { useState, useEffect } from "react"
import "./styles.css"

const GameInterface = ({ hideNav }) => {
  // Hide Nav when component is mounted
  useEffect(hideNav, [])

  const [placeName, setNamePlace] = useState("Lieu")
  const [eventName, setNameEvent] = useState("Évenement")

  const handleNamePlace = () => {
    placeName === "Lieu"
      ? setNamePlace("Une superbe et très grande forêt")
      : setNamePlace("Lieu")
  }

  const handleNameEvent = () => {
    return eventName === "Évenement"
      ? setNameEvent("rencontre")
      : setNameEvent("Évenement")
  }

  const describeClassName =
    placeName !== "Lieu" && eventName !== "Évenement" ? "opacity-100" : "opacity-0"

  return (
    <div
      className={`game-interface w-screen h-screen bg-gray-900 px-4 ${
        placeName === "Lieu" ? "" : "is-forest"
      }`}
      style={{
        backgroundImage:
          placeName === "Lieu"
            ? ""
            : `url("https://cdnb.artstation.com/p/assets/images/images/010/310/039/large/kasia-kosobucka-landscape-bg.jpg?1523743339")`,
      }}
    >
      <div className="game-interface__scene py-10">
        <div className="card__place-event mx-1 flex justify-around">
          <div
            onClick={() => handleNamePlace()}
            className={`card__place ${
              placeName === "Lieu" ? "" : "card__place--active bg-teal-500"
            } bg-gray-200 select-none duration-500 h-56 w-40 rounded-lg flex justify-center items-center transform hover:scale-105 cursor-pointer shadow-lg text-gray-800 text-2xl font-bold`}
          >
            <h1
              className={`card__title text-center p-4 max-h-full overflow-y-auto ${
                placeName === "Lieu" ? "" : "card__title--active"
              }`}
            >
              {placeName}
            </h1>
          </div>
          <div
            onClick={() => handleNameEvent()}
            className={`card__event ${
              eventName === "Évenement" ? "" : "card__event--active bg-teal-500"
            } bg-gray-200 select-none duration-500 h-56 w-40 rounded-lg flex justify-center items-center transform hover:scale-105 cursor-pointer shadow-lg text-gray-800 text-2xl font-bold`}
          >
            <h1
              className={`card__title text-center p-4 max-h-full overflow-y-auto ${
                eventName === "Évenement" ? "" : "card__title--active"
              }`}
            >
              {eventName}
            </h1>
          </div>
        </div>
        <div
          className={`game-interface__describe transform duration-500 flex flex-col ${describeClassName}`}
        >
          <p className="game-interface__content text-white font-bold text-xl text-center">
            Vous entrez dans la fôret et Vous êtes face à un ours <br />
            Que faites-vous ?
          </p>
          <div className="game-interface__actions">
            <div className="card__action">Action</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameInterface
