import React from "react"
import "./styles.css"
import Field from "src/containers/Field/index"
import Story from "./Story/index"

const Profile = () => (
  <div className="profile mx-8">
    <section className="profile__stories mt-4">
      <h1 className="stories__title uppercase text-white text-3xl font-light">
        Mes histoires
      </h1>
      <ul className="stories__list">
        <Story />
      </ul>
    </section>
    <section className="profile__user">
      <div className="profile__left-panel">
        <img src="" alt="" className="profile__img" />
      </div>
      <div className="profile__right-panel">
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="profile__form"
        >
          <label className="profile__label" htmlFor="username">
            Nom d'utilisateur
          </label>
          <Field type="text" name="username" placeholder="Nom d'utilisateur" />
          <label className="profile__label" htmlFor="email">
            Email
          </label>
          <Field type="email" name="email" placeholder="Email" />
          <label className="profile__label" htmlFor="password">
            Mot de passe
          </label>
          <Field type="password" name="password" placeholder="Mot de passe" />
          <input
            className="profile__submit"
            type="submit"
            value="Éditer mes informations"
          />
        </form>
        <button className="profile__delete-account">Supprimer mon compte</button>
      </div>
    </section>
  </div>
)

export default Profile
