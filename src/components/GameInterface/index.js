import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./styles.css"

const GameInterface = ({
  hideNav,
  fetchStory,
  place,
  event,
  transitions,
  nextScene,
}) => {
  // Hide Nav when component is mounted
  useEffect(() => {
    fetchStory()
    hideNav()
  }, [fetchStory, hideNav])

  const [placeName, setNamePlace] = useState("Lieu")
  const [eventName, setNameEvent] = useState("Évenement")

  const handleNamePlace = () => {
    placeName === "Lieu" ? setNamePlace(place.name) : setNamePlace("Lieu")
  }

  const handleNameEvent = () => {
    return eventName === "Évenement"
      ? setNameEvent(event.name)
      : setNameEvent("Évenement")
  }

  const handleNextScene = (id) => {
    nextScene(id)
    setNamePlace("Lieu")
    setNameEvent("Évenement")
  }

  const describeClassName =
    placeName !== "Lieu" && eventName !== "Évenement" ? "opacity-100" : "opacity-0"

  return (
    <div
      className={`game-interface w-screen h-screen bg-gray-900 px-4 flex flex-col items-center justify-center relative ${
        placeName === "Lieu" ? "" : "is-forest"
      }`}
      style={{
        backgroundImage:
          placeName === "Lieu"
            ? ""
            : `url("https://cdnb.artstation.com/p/assets/images/images/010/310/039/large/kasia-kosobucka-landscape-bg.jpg?1523743339")`,
      }}
    >
      <div className="game-interface__button fixed right-0 top-0">
        <Link to="/">
          <button className="game-interface__leave mr-12 mt-12 focus:outline-none bg-red-700 w-12 h-12 ml-auto duration-150 transform easy-in-out hover:scale-105 rounded-full font-bold text-gray-300 flex justify-center items-center">
            <i className="fas fa-2x fa-times font-light"></i>
          </button>
        </Link>
      </div>
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
            {place.description} et {event.description} <br />
            Que faites-vous ?
          </p>
          <div className="game-interface__actions my-2 py-4 overflow-x-auto flex">
            {transitions.map((action, key) => {
              return (
                <div
                  key={key}
                  onClick={() => handleNextScene(action.id)}
                  className="card__action my-2 mx-2 bg-gray-200 select-none px-12 h-56 w-48 rounded-lg flex justify-center items-center transform hover:scale-105 cursor-pointer shadow-lg text-gray-800 text-2xl font-bold"
                >
                  {action.action.name}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

GameInterface.propTypes = {
  event: PropTypes.object.isRequired,
  place: PropTypes.object.isRequired,
  transitions: PropTypes.array.isRequired,
  hideNav: PropTypes.func.isRequired,
  fetchStory: PropTypes.func.isRequired,
  nextScene: PropTypes.func.isRequired,
}
export default GameInterface
