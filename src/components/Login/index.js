import React from "react"
import "./styles.css"

const Login = () => (
  <div className="login mt-16">
    <div className="login__panel w-64 flex flex-col justify-center mx-auto p-4 border-2 border-orange-400 bg-orange-900 font-bold">
      <h1 className="login__title text-2xl font-bold text-center text-orange-400">
        Prouvez que vous n'êtes pas n'importe quel guerrier.
      </h1>
      <label className="login__label my-2 text-orange-400" htmlFor="email">
        Email
      </label>
      <input
        className="login__input px-4 mb-6 h-12"
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
        className="login__submit cursor-pointer h-32 p-6 mt-6 uppercase font-bold whitespace-pre-wrap border-4 border-double border-yellow-400 bg-orange-600 rounded-sm shadow-inner"
        type="submit"
        value="Entrer dans la légende"
      />
    </div>
  </div>
)

export default Login
