import React, { useState, useRef, useEffect } from "react"
import "./styles.css"
import PropTypes from "prop-types"
import Field from "src/containers/Field/index"
import { checkInput } from "src/selectors/signupform"
import { Redirect, Link } from "react-router-dom"

const SignupForm = ({ username, email, password, passwordCheck, handleSignup }) => {
  const [isSignedUp, setSignedUp] = useState(false)
  const [errors, setErrors] = useState([])
  const [focus, setFocus] = useState("")

  // useRef to block the initial render of useEffect (componentDidMounted)
  const firstUpdate = useRef(true)

  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordCheckRef = useRef()

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      // inputRef.current.focus()
    } else {
      console.log(errors)
      if (Object.keys(errors).length === 0) {
        handleSignup()
        // setSignedUp(true)
      } else {
        setFocus(errors[0].type)
      }
    }
  }, [errors])

  useEffect(() => {
    if (focus === "username") {
      usernameRef.current.focus()
    } else if (focus === "email") {
      emailRef.current.focus()
    } else if (focus === "password") {
      passwordRef.current.focus()
    } else if (focus === "passwordCheck") {
      passwordCheckRef.current.focus()
    }

    return () => {
      setFocus("")
    }
  }, [focus])

  return (
    <div className="signup-form mt-8 sm:flex">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setErrors(checkInput(username, email, password, passwordCheck))
        }}
        className="signup-form__panel  w-64 flex flex-col justify-center mx-auto p-4 border-2 border-orange-400 bg-orange-900 font-bold"
      >
        <h1 className="signup-form__title text-xl font-bold text-center text-orange-400">
          Inscription
        </h1>

        <ul className="signup-form__errorsList">
          {errors.map((error, index) => (
            <li className="text-xs mt-1" key={index}>
              {error.errorMessage}
            </li>
          ))}
        </ul>

        <label
          className="signup-form__label mt-4 mb-2 text-orange-400"
          htmlFor="username"
        >
          * Nom d'utilisateur
        </label>
        <Field
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          inputRef={usernameRef}
        />

        <label
          className="signup-form__label mt-4 mb-2 text-orange-400"
          htmlFor="email"
        >
          * Email
        </label>
        <Field type="email" name="email" placeholder="Email" inputRef={emailRef} />

        <label className="signup-form my-2 text-orange-400" htmlFor="password">
          * Mot de passe
        </label>
        <Field
          type="password"
          name="password"
          placeholder="Mot de passe"
          inputRef={passwordRef}
        />

        <label className="signup-form my-2 text-orange-400" htmlFor="password-check">
          * Confirmez votre mot de passe
        </label>
        <Field
          type="password"
          name="passwordCheck"
          placeholder="Confirmation mot de passe"
          inputRef={passwordCheckRef}
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
      <section className="login-form__noaccount w-64 h-32 flex flex-col justify-center mx-auto p-4 border-2 border-orange-400 bg-orange-900 font-bold mt-4 sm:mt-0 sm:self-center">
        <p className="login-form__signup text-center">Déjà inscrit ?</p>
        <Link to="/login" className="mx-auto">
          <button
            type="button"
            className="login-form__btn-signup cursor-pointer h-12 px-6 mt-2 uppercase font-bold whitespace-pre-wrap border-4 border-double border-yellow-400 bg-orange-600 rounded-sm shadow-inner"
          >
            Se connecter
          </button>
        </Link>
      </section>
      {isSignedUp && <Redirect to="/" />}
    </div>
  )
}

SignupForm.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordCheck: PropTypes.string.isRequired,
  handleSignup: PropTypes.func.isRequired,
}
export default SignupForm
