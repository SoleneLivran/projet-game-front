import React from "react"
import "./styles.css"
import PropTypes from "prop-types"
import Field from "src/containers/Field/index"
import { checkInput } from "src/selectors/signupform"
import { Redirect } from "react-router-dom"

const SignupForm = ({
  pseudo,
  email,
  password,
  passwordCheck,
  handleSignup,
  isSignedUp,
}) => {
  const errors = checkInput(pseudo, email, password, passwordCheck)
  return (
    <div className="signup-form mt-8">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSignup()
          // if (Object.keys(errors).length === 0) {
          //   handleSignup()
          // }
        }}
        className="signup-form__panel w-64 flex flex-col justify-center mx-auto p-4 border-2 border-orange-400 bg-orange-900 font-bold"
      >
        <h1 className="signup-form__title text-xl font-bold text-center text-orange-400">
          Inscription
        </h1>

        <label
          className="signup-form__label mt-4 mb-2 text-orange-400"
          htmlFor="pseudo"
        >
          * Pseudo
        </label>
        <Field type="text" name="pseudo" placeholder="Pseudo" />

        <label
          className="signup-form__label mt-4 mb-2 text-orange-400"
          htmlFor="email"
        >
          * Email
        </label>
        <Field type="email" name="email" placeholder="Email" />

        <label className="signup-form my-2 text-orange-400" htmlFor="password">
          * Mot de passe
        </label>
        <Field type="password" name="password" placeholder="Mot de passe" />

        <label className="signup-form my-2 text-orange-400" htmlFor="password-check">
          * Confirmez votre mot de passe
        </label>
        <Field
          type="password"
          name="passwordCheck"
          placeholder="Confirmation mot de passe"
        />

        <p className="signup-form__info italic text-xs mt-1">
          * Informations obligatoires
        </p>

        <input
          className="signup-form__submit cursor-pointer h-32 p-6 mt-8 uppercase font-bold whitespace-pre-wrap border-4 border-double border-yellow-400 bg-orange-600 rounded-sm shadow-inner"
          type="submit"
          value="Confirmer l'inscription"
        />
      </form>
      {isSignedUp && <Redirect to="/" />}
    </div>
  )
}

SignupForm.propTypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordCheck: PropTypes.string.isRequired,
  isSignedUp: PropTypes.bool.isRequired,
  handleSignup: PropTypes.func.isRequired,
}
export default SignupForm
