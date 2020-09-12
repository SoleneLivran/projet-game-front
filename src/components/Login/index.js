import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"

const Login = () => (
  <div className="login mt-8">
    <div className="login__panel w-64 flex flex-col justify-center mx-auto p-4 border-2 border-orange-400 bg-orange-900 font-bold">
      <h1 className="login__title text-xl font-bold text-center text-orange-400">
        Prouvez que vous n'êtes pas n'importe quel guerrier.
      </h1>
      <label className="login__label mt-4 mb-2 text-orange-400" htmlFor="email">
        Email
      </label>
      <input
        className="login__input px-4 mb-2 h-12"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
      />

      <label className="login__label my-2 text-orange-400" htmlFor="password">
        Mot de passe
      </label>
      <input
        className="login__input px-4 mb-6 h-12"
        type="password"
        id="password"
        name="password"
        placeholder="Mot de passe"
        required
      />

      <input
        className="login__submit cursor-pointer h-32 p-6 mt-2 uppercase font-bold whitespace-pre-wrap border-4 border-double border-yellow-400 bg-orange-600 rounded-sm shadow-inner"
        type="submit"
        value="Entrer dans la légende"
      />

      <p className="login__signup text-center mt-8">Pas encore de compte ?</p>
      <Link to="/signup" className="mx-auto">
        <button
          type="button"
          className="login__btn-signup cursor-pointer h-12 px-6 mt-2 uppercase font-bold whitespace-pre-wrap border-4 border-double border-yellow-400 bg-orange-600 rounded-sm shadow-inner"
        >
          Créer un compte
        </button>
      </Link>
    </div>
  </div>
)

export default Login
