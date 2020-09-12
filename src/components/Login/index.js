import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import Field from "src/components/Field/index"

const Login = () => (
  <div className="login mt-8 md:flex">
    <form className="login__panel w-64 flex flex-col justify-center mx-auto p-4 border-2 border-orange-400 bg-orange-900 font-bold">
      <h1 className="login__title text-xl font-bold text-center text-orange-400">
        Prouvez que vous n'êtes pas n'importe quel guerrier.
      </h1>
      <label className="login__label mt-4 mb-2 text-orange-400" htmlFor="email">
        Email
      </label>
      <Field type="email" name="email" placeholder="Email" />

      <label className="login__label my-2 text-orange-400" htmlFor="password">
        Mot de passe
      </label>
      <Field type="password" name="password" placeholder="Mot de passe" />

      <input
        className="login__submit cursor-pointer h-32 p-6 mt-8 uppercase font-bold whitespace-pre-wrap border-4 border-double border-yellow-400 bg-orange-600 rounded-sm shadow-inner"
        type="submit"
        value="Entrer dans la légende"
      />
    </form>

    <section className="login__noaccount w-64 h-32 flex flex-col justify-center mx-auto p-4 border-2 border-orange-400 bg-orange-900 font-bold mt-4">
      <p className="login__signup text-center">Pas encore de compte ?</p>
      <Link to="/signup" className="mx-auto">
        <button
          type="button"
          className="login__btn-signup cursor-pointer h-12 px-6 mt-2 uppercase font-bold whitespace-pre-wrap border-4 border-double border-yellow-400 bg-orange-600 rounded-sm shadow-inner"
        >
          Créer un compte
        </button>
      </Link>
    </section>
  </div>
)

export default Login
