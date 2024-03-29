import React, { useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { Link } from "react-router-dom"

const GameEnd = ({ handleRestart, storyId }) => {
  const [rating, setRating] = useState(0)
  const stars = [1, 2, 3, 4, 5]

  // Send POST request to rate the story, by leaving or restarting the game
  const handleRating = () => {
    if (rating !== 0 && rating <= 5) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_BACK}/api/stories/${storyId}/rating`,
          {
            note: rating,
            story_id: storyId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }
        )
        .then((response) => {
          setTimeout(() => {
            setRating(0)
          }, 500)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <div className="game-end text-white text-center my-4 bg-gray-800 bg-opacity-50 rounded-lg py-2">
      <h1 className="game-end__title text-2xl font-bold">Fin de partie</h1>
      <p className="game-end__greetings">Merci d'avoir joué</p>
      <div className="game-end__rating my-4">
        <p className="game-end__rating">Noter l'histoire :</p>
        <div className="game-end__stars my-2">
          {stars.map((star) => (
            <i
              key={star}
              onClick={() => setRating(star)}
              className={`${
                rating >= star ? "fas" : "far"
              } fa-star fa-2x text-yellow-500 mx-1 transform hover:scale-125 cursor-pointer`}
            />
          ))}
        </div>
      </div>
      <div className="game-end__buttons flex flex-col items-center my-1 sm:flex-row sm:justify-center">
        <button
          onClick={() => {
            handleRestart()
            handleRating()
          }}
          className="game-end__try-again w-32 bg-green-400 py-4 font-bold rounded-md my-2 sm:mx-6 md:py-6 md:w-40 md:text-lg"
        >
          Rejouer
        </button>
        <Link to="/">
          <button
            onClick={() => handleRating()}
            className="game-end__quit w-32 bg-red-400 py-4 font-bold rounded-md my-2 sm:mx-6 md:py-6 md:w-40 md:text-lg"
          >
            Quitter
          </button>
        </Link>
      </div>
    </div>
  )
}

GameEnd.propTypes = {
  handleRestart: PropTypes.func.isRequired,
  storyId: PropTypes.string.isRequired,
}
export default GameEnd
