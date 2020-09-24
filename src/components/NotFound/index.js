import { Link } from "react-router-dom"
import React from "react"
import "./styles.css"

const NotFound = () => (
  <div className="not-found text-white h-64 flex flex-col items-center justify-around">
    <h1 className="not-found__title text-6xl">404</h1>
    <p className="not-found__content text-2xl text-center">
      Ça manque d'aventures par ici..
    </p>
    <Link to="/">
      <button className="not-found__home px-8 bg-blue-500 py-4 rounded-lg">
        Accueil
      </button>
    </Link>
  </div>
)

export default NotFound
