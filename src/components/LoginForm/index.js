import React from "react"
import { Redirect } from "react-router-dom"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "./styles.css"
import Field from "src/containers/Field/index"

const LoginForm = ({ handleLogin, isLogged }) => (
  <div className="h-screen">
    <div className="login-form mt-8 md:flex">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin()
        }}
        className="login-form__panel w-64 flex flex-col justify-center mx-auto p-4 rounded-md bg-gray-900 shadow-lg font-bold"
      >
        <h1 className="login-form__title text-xl font-bold text-center text-gray-100">
          Prouvez que vous n'êtes pas n'importe quel guerrier.
        </h1>
        <label
          className="login-form__label mt-4 mb-2 text-gray-100"
          htmlFor="username"
        >
          Nom d'utilisateur
        </label>
        <Field
          type="username"
          name="username"
          placeholder="Nom d'utilisateur"
          className="rounded-md shadow-inner"
        />

        <label className="login-form my-2 text-gray-100" htmlFor="password">
          Mot de passe
        </label>
        <Field
          type="password"
          name="password"
          placeholder="Mot de passe"
          className="rounded-md shadow-inner"
        />

        <a
          href="${process.env.REACT_APP_SERVER_BACK}/reset-password"
          className="text-sm underline text-gray-100 hover:text-orange-300"
        >
          Mot de passe perdu
        </a>

        <input
          className="login-form__submit cursor-pointer py-4 px-6 mt-8 uppercase font-bold whitespace-pre-wrap  border-double bg-orange-600  transition duration-150 ease-in rounded-sm shadow-inner hover:bg-orange-500"
          type="submit"
          value="Entrer dans la légende"
        />
      </form>

      <section className="login-form__noaccount w-64 h-32 flex flex-col justify-center mx-auto p-4 text-white rounded-md shadow-lg bg-gray-900 font-bold mt-4 md:mt-0 md:self-center">
        <p className="login-form__signup text-center">Pas encore de compte ?</p>
        <Link to="/signup" className="mx-auto">
          <button
            type="button"
            className="login-form__btn-signup cursor-pointer h-12 text-gray-900 px-6 mt-2 uppercase font-bold whitespace-pre-wrap bg-orange-600 rounded-sm shadow-inner"
          >
            Créer un compte
          </button>
        </Link>
      </section>
    </div>
    {isLogged && <Redirect to="/" />}
  </div>
)

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
}

export default LoginForm
