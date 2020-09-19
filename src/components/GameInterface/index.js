import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./styles.css"

const GameInterface = ({ fetchStory, place, event, transitions, nextScene }) => {
  // Hide Nav when component is mounted
  useEffect(() => {
    fetchStory()
  }, [fetchStory])

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
    setNamePlace("Lieu")
    setNameEvent("Évenement")
    setTimeout(() => {
      nextScene(id)
    }, 500)
  }

  const describeClassName =
    placeName !== "Lieu" && eventName !== "Évenement" ? "opacity-100" : "opacity-0"

  return (
    <div
      className={`game-interface h-screen w-screen bg-gray-900 px-4 relative ${
        placeName === "Lieu" ? "" : "is-forest"
      }`}
      style={{
        backgroundImage:
          placeName === "Lieu"
            ? ""
            : `url("https://cdnb.artstation.com/p/assets/images/images/010/310/039/large/kasia-kosobucka-landscape-bg.jpg?1523743339")`,
      }}
    >
      <div className="game-interface__button absolute right-0 top-0">
        <Link to="/">
          <button className="game-interface__leave mr-6 mt-6 focus:outline-none bg-red-700 w-12 h-12 ml-auto duration-150 transform easy-in-out hover:scale-105 rounded-full font-bold text-gray-300 flex justify-center items-center xl:mr-48 xl:mt-12">
            <i className="fas fa-2x fa-times font-light"></i>
          </button>
        </Link>
      </div>
      <div className="game-interface__scene h-full overflow-x-auto pt-20 md:pt-10">
        <div className="card__place-event mx-1 my-2 flex justify-center">
          <div
            onClick={() => handleNamePlace()}
            className={`card__place mr-4 ${
              placeName === "Lieu" ? "" : "card__place--active bg-teal-500"
            } bg-gray-200 select-none duration-500 h-56 w-40 rounded-lg flex justify-center items-center transform hover:scale-105 cursor-pointer shadow-lg text-gray-800 text-2xl font-bold`}
          >
            <h1
              className={`card__title text-center mx-auto p-1 max-h-full overflow-y-auto ${
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
              className={`card__title text-center mx-auto p-1 max-h-full ${
                eventName === "Évenement" ? "" : "card__title--active"
              }`}
            >
              {eventName}
            </h1>
          </div>
        </div>
        <div
          className={`game-interface__describe pt-10 sm:pt-20 transform duration-500 px-8 flex flex-col ${describeClassName}`}
        >
          <p className="game-interface__content my-2 px-4 py-2 text-white font-bold text-lg sm:text-xl text-center bg-gray-800 bg-opacity-50 rounded-lg">
            {place.description} et {event.description} <br />
            Que faites-vous ?
          </p>
          <div className="game-interface__actions py-6 overflow-x-auto flex sm:justify-center">
            {transitions.map((action, key) => {
              return (
                <div
                  key={key}
                  onClick={() => handleNextScene(action.id)}
                  className="card__action my-2 mx-2 bg-gray-200 select-none px-4 h-48 w-40 rounded-lg flex justify-center items-center transform hover:scale-105 cursor-pointer shadow-lg text-gray-800 text-center text-lg font-bold sm:text-2xl sm:h-56 sm:w-48"
                >
                  <p className="card__action-title overflow-y-auto">
                    {action.action.name}
                  </p>
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
  fetchStory: PropTypes.func.isRequired,
  nextScene: PropTypes.func.isRequired,
}
export default GameInterface
