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
      className={`game-interface w-screen h-screen bg-gray-900 px-4 flex flex-col items-center justify-center ${
        placeName === "Lieu" ? "" : "is-forest"
      }`}
      style={{
        backgroundImage:
          placeName === "Lieu"
            ? ""
            : `url("https://cdnb.artstation.com/p/assets/images/images/010/310/039/large/kasia-kosobucka-landscape-bg.jpg?1523743339")`,
      }}
    >
      <div className="game-interface__scene pt-10">
        <div className="card__place-event mx-1 my-2 flex justify-center">
          <div
            onClick={() => handleNamePlace()}
            className={`card__place mr-4 ${
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
            className={`card__event ml-4 ${
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
          className={`game-interface__describe pt-20 transform duration-500 my-2 px-8 flex flex-col w-screen ${describeClassName}`}
        >
          <p className="game-interface__content my-2 px-4 py-2 text-white font-bold text-xl text-center bg-gray-800 bg-opacity-50 rounded-lg">
            Vous entrez dans la fôret et Vous êtes face à un ours <br />
            Que faites-vous ?
          </p>
          <div className="game-interface__actions my-2 py-4 overflow-x-auto flex">
            <div className="card__action my-2 mx-2 bg-gray-200 select-none px-12 h-56 w-48 rounded-lg flex justify-center items-center transform hover:scale-105 cursor-pointer shadow-lg text-gray-800 text-2xl font-bold">
              Action
            </div>
            <div className="card__action my-2 mx-2 bg-gray-200 select-none px-12 h-56 w-48 rounded-lg flex justify-center items-center transform hover:scale-105 cursor-pointer shadow-lg text-gray-800 text-2xl font-bold">
              Action
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameInterface
