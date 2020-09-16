import React from "react"
import "./styles.css"
import Field from "src/containers/Field/index"
import Story from "./Story/index"

const Profile = () => (
  <div className="profile px-8 h-auto sm:mt-10">
    <section className="profile__stories mt-4 border-b-4 pb-10">
      <h1 className="stories__title uppercase text-white text-3xl font-light">
        Mes histoires
      </h1>
      <ul className="stories__list mt-2">
        <Story />
      </ul>
    </section>
    <section className="profile__user mt-10">
      <div className="profile__left-panel flex justify-center my-6">
        <img
          src="/assets/img/default_avatar.png"
          alt=""
          className="profile__img w-40 h-40"
        />
      </div>
      <div className="profile__right-panel">
        <h1 className="stories__title uppercase text-white text-3xl font-light">
          Mes informations
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="profile__form flex flex-col"
        >
          <label className="profile__label mt-2" htmlFor="username">
            Nom d'utilisateur
          </label>
          <Field type="text" name="username" placeholder="Nom d'utilisateur" />
          <label className="profile__label mt-2" htmlFor="email">
            Email
          </label>
          <Field type="email" name="email" placeholder="Email" />
          <label className="profile__label mt-2" htmlFor="password">
            Mot de passe
          </label>
          <Field type="password" name="password" placeholder="Mot de passe" />
          <input
            className="profile__submit mt-4 py-4 bg-blue-400 rounded-md text-white font-bold"
            type="submit"
            value="Éditer mes informations"
          />
        </form>
        <button className="profile__delete-account w-full my-6 py-4 bg-red-600 rounded-md text-white font-bold">
          Supprimer mon compte
        </button>
      </div>
    </section>
  </div>
)

export default Profile
