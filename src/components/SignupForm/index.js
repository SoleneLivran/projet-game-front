import React from "react"
import "./styles.css"
import Field from "src/components/Field/index"

const SignupForm = () => (
  <div className="signup-form">
    <form
      // onSubmit={(e) => {
      //   e.preventDefault()
      //   handleLogin()
      // }}
      className="login-form__panel w-64 flex flex-col justify-center mx-auto p-4 border-2 border-orange-400 bg-orange-900 font-bold"
    >
      <h1 className="login-form__title text-xl font-bold text-center text-orange-400">
        Inscription
      </h1>
      <label className="login-form__label mt-4 mb-2 text-orange-400" htmlFor="email">
        Email
      </label>
      <Field type="email" name="email" placeholder="Email" />

      <label className="login-form my-2 text-orange-400" htmlFor="password">
        Mot de passe
      </label>
      <Field type="password" name="password" placeholder="Mot de passe" />

      <input
        className="login-form__submit cursor-pointer h-32 p-6 mt-8 uppercase font-bold whitespace-pre-wrap border-4 border-double border-yellow-400 bg-orange-600 rounded-sm shadow-inner"
        type="submit"
        value="Entrer dans la légende"
      />
    </form>
  </div>
)

export default SignupForm
