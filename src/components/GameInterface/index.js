import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, useParams, Redirect } from "react-router-dom"

import GameEnd from "./GameEnd/index"
import "./styles.css"

const GameInterface = ({
  fetchStory,
  place,
  event,
  transitions,
  nextScene,
  clearPreviousGame,
  isLogged,
}) => {
  const { slug } = useParams()

  const [placeName, setNamePlace] = useState("Lieu")
  const [eventName, setNameEvent] = useState("Évenement")

  const [placeDescribe, setPlaceDescribe] = useState("")
  const [eventDescribe, setEventDescribe] = useState("")

  const [isEnd, setIsEnd] = useState(false)

  // change the state when the card is clicked
  const handleNamePlace = () => {
    placeName === "Lieu" ? setNamePlace(place.name) : setNamePlace("Lieu")
  }

  // change the state when the card is clicked
  const handleNameEvent = () => {
    eventName === "Évenement" ? setNameEvent(event.name) : setNameEvent("Évenement")
  }

  // change the scene when an action is choosen
  const handleNextScene = (id) => {
    nextScene(id)
  }

  // component is updated when place & event change
  useEffect(() => {
    // check is place card have to be return
    if (placeName === place.name) {
      setNameEvent("Évenement")
    } else {
      setNamePlace("Lieu")
      setNameEvent("Évenement")
    }

    // wait for the describe to change or to display the GameEnd component
    setTimeout(() => {
      setPlaceDescribe(place.description)
      setEventDescribe(event.description)

      if (event.isEnd === true) {
        setIsEnd(true)
      } else {
        setIsEnd(false)
      }
    }, 500)
  }, [place, event])

  // load stories when component is mounted
  useEffect(() => {
    fetchStory(slug)
  }, [fetchStory, slug])

  // restart the game after finished it
  const handleRestart = () => {
    setNamePlace("Lieu")
    setNameEvent("Évenement")
    setTimeout(() => {
      fetchStory(slug)
    }, 500)
  }
  // Cleanup function to remove stories array when leaving the game
  useEffect(() => {
    return () => {
      clearPreviousGame()
    }
  }, [clearPreviousGame])

  const describeClassName =
    placeName !== "Lieu" && eventName !== "Évenement" ? "opacity-100" : "opacity-0"

  return (
    <div
      className={`game-interface h-screen w-screen bg-gray-900 px-4 relative ${
        placeName === "Lieu" ? "" : "is-bg"
      }`}
      style={{
        backgroundImage:
          placeName === "Lieu" ? "" : `url(/assets/img/${place.pictureFile}.jpg)`,
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
            style={{
              backgroundImage:
                placeName === "Lieu"
                  ? ""
                  : `url(/assets/img/${place.pictureFile}.jpg)`,
            }}
            className={`card__place mr-4 ${
              placeName === "Lieu"
                ? ""
                : "card__place--active bg-teal-500 bg-cover bg-center"
            } bg-gray-200 select-none duration-500 h-56 w-32 rounded-lg flex justify-center items-center transform hover:scale-105 cursor-pointer shadow-lg text-gray-800 text-xl font-bold sm:text-2xl sm:w-40`}
          >
            <h1
              className={`card__title text-center mx-auto p-1 max-h-full overflow-y-auto ${
                placeName === "Lieu"
                  ? ""
                  : "card__title--active bg-gray-800 bg-opacity-50 rounded-lg"
              }`}
            >
              {placeName}
            </h1>
          </div>
          <div
            onClick={() => handleNameEvent()}
            style={{
              backgroundImage:
                eventName === "Évenement"
                  ? ""
                  : `url(/assets/img/${event.pictureFile}.jpg)`,
            }}
            className={`card__event ml-4 ${
              eventName === "Évenement"
                ? ""
                : "card__event--active bg-teal-500 bg-cover bg-center"
            } bg-gray-200 select-none duration-500 h-56 w-32 rounded-lg flex justify-center items-center transform hover:scale-105 cursor-pointer shadow-lg text-gray-800 text-xl font-bold sm:text-2xl sm:w-40`}
          >
            <h1
              className={`card__title text-center mx-auto p-1 max-h-full ${
                eventName === "Évenement"
                  ? ""
                  : "card__title--active bg-gray-800 bg-opacity-50 rounded-lg mx-1"
              }`}
            >
              {eventName}
            </h1>
          </div>
        </div>
        <div
          className={`game-interface__describe pt-10 sm:pt-20 transform duration-500 px-8 flex flex-col ${describeClassName}`}
        >
          <div className="game-interface__content mt-2 px-4 py-2 text-white font-bold text-lg sm:text-xl text-center bg-gray-800 bg-opacity-50 rounded-lg">
            <p className="mx-1">
              {placeDescribe} et <span className="lowercase">{eventDescribe}</span>
            </p>
            {!isEnd && <p className="py-1">Que faites-vous ?</p>}
          </div>
          {isEnd && <GameEnd handleRestart={handleRestart} storyId={slug} />}
          {!isEnd && placeName !== "Lieu" && eventName !== "Évenement" && (
            <div className="game-interface__actions py-6 overflow-x-auto flex">
              {transitions.map((action, key) => {
                return (
                  <div
                    key={key}
                    onClick={() => handleNextScene(action.id)}
                    className="card__action my-2 mx-2 bg-gray-200 select-none px-4 h-48 w-32 rounded-lg flex justify-center items-center transform hover:scale-105 cursor-pointer shadow-lg text-gray-800 text-center text-md font-bold sm:text-2xl sm:h-56 sm:w-48"
                  >
                    <p className="card__action-title overflow-y-auto w-30">
                      {action.action.name}
                    </p>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
      {!isLogged && <Redirect to="/login" />}
    </div>
  )
}

GameInterface.propTypes = {
  event: PropTypes.object.isRequired,
  place: PropTypes.object.isRequired,
  transitions: PropTypes.array.isRequired,
  fetchStory: PropTypes.func.isRequired,
  nextScene: PropTypes.func.isRequired,
  clearPreviousGame: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
}
export default GameInterface
