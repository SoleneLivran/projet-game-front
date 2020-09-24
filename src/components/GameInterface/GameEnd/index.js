import React, { useState, useEffect } from "react"
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
          `http://ec2-18-234-186-84.compute-1.amazonaws.com/api/stories/${storyId}/rating`,
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
    <div className="game-end text-white text-center my-4">
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
          <button className="game-end__quit w-40 h-16 px-2 bg-red-400 py-2 font-bold rounded-md my-2 sm:h-20 sm:mx-6 md:py-2 md:w-40 md:text-lg">
            Retourner à l'accueil
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
