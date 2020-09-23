import React, { useState, useEffect } from "react"
import { useParams, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import axios from "axios"
import "./styles.css"
import FieldProfile from "src/containers/FieldProfile/index"
import Story from "./Story/index"
import ModalDelete from "./ModalDelete/index"
import ModalAvatar from "src/containers/ModalAvatar/index"

import { checkInput } from "src/selectors/profile"

const Profile = ({
  connectedId,
  fetchUser,
  avatar,
  handleUserEdit,
  handleDeleteUser,
  name,
  mail,
  password,
  newPassword,
}) => {
  // Get params from url
  const { slug } = useParams()

  // Modal state, display on button or hidden when closing it
  const [showModalDelete, setModalDelete] = useState(false)
  const [showModalAvatar, setModalAvatar] = useState(false)

  // Change modal current state
  const handleModalDelete = () => setModalDelete(true)
  const handleModalAvatar = () => setModalAvatar(true)

  const [userStoriesList, setUserStoriesList] = useState([])

  const fetchUserStories = () => {
    axios
      .get(
        `http://ec2-18-234-186-84.compute-1.amazonaws.com/api/app_users/${connectedId}/stories`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      )
      .then((response) => {
        setUserStoriesList(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const errors = checkInput(name, mail, password, newPassword)

  // Get current user data, API GET request in user middleware:
  useEffect(() => {
    fetchUser()
    fetchUserStories()
  }, [])
  return (
    <div className="profile px-8 h-auto sm:px-16 sm:mt-10 sm:px-24 md:mx-auto md:mt-20">
      {/* Only when modal is open (true) -> Modal is display, and the event click/key can be use */}
      {showModalDelete && (
        <ModalDelete
          showModalDelete={showModalDelete}
          onClose={() => setModalDelete(false)}
          handleDeleteUser={handleDeleteUser}
          connectedId={connectedId}
        />
      )}
      {showModalAvatar && (
        <ModalAvatar
          showModalAvatar={showModalAvatar}
          onClose={() => setModalAvatar(false)}
        />
      )}
      <section className="profile__stories mt-4 border-b-4 py-8">
        <h1 className="stories__title uppercase text-white text-3xl font-light">
          Mes histoires
        </h1>
        <ul className="stories__list my-6 overflow-y-auto">
          {userStoriesList.length === 0 && (
            <p className="text-center text-white">Aucune histoires créées</p>
          )}
          {userStoriesList.map((story) => (
            <Story
              key={story.id}
              id={story.id}
              title={story.title}
              status={story.status}
            />
          ))}
        </ul>
      </section>
      <section className="profile__user mt-10 md:flex justify-around">
        <div className="profile__left-panel flex flex-col w-64 mx-auto md:mx-0 justify-center my-6 items-center md:mb-20">
          <img
            src={`/assets/img/${avatar}.png`}
            alt=""
            className="profile__img w-40 h-40 md:w-56 md:h-56 "
          />
          <button
            onClick={() => handleModalAvatar()}
            className="profile__button-img mt-4 p-4 bg-white rounded-lg font-bold"
          >
            Choisir un avatar
          </button>
        </div>
        <div className="profile__right-panel md:w-6/12">
          <h1 className="stories__title uppercase text-white text-3xl font-light">
            Mes informations
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              console.log(errors)
              if (Object.keys(errors).length === 0) {
                handleUserEdit()
              }
            }}
            className="profile__form flex flex-col"
          >
            <label className="profile__label mt-2" htmlFor="username">
              Nom d'utilisateur
            </label>
            <FieldProfile
              type="text"
              name="username"
              placeholder="Nom d'utilisateur"
            />
            <label className="profile__label mt-2" htmlFor="email">
              Email
            </label>
            <FieldProfile type="email" name="email" placeholder="Email" />

            <label className="profile__label mt-2" htmlFor="password">
              Mot de passe actuel
            </label>
            <FieldProfile
              type="password"
              name="password"
              placeholder="Mot de passe"
            />
            <label className="profile__label mt-2" htmlFor="password">
              Nouveau mot de passe
            </label>
            <FieldProfile
              type="password"
              name="newPassword"
              placeholder="Nouveau mot de passe"
            />
            <input
              className="profile__submit cursor-pointer mt-4 py-4 bg-blue-400 rounded-md text-white font-bold"
              type="submit"
              value="Éditer mes informations"
            />
          </form>
          <button
            onClick={() => handleModalDelete()}
            className="profile__delete-account w-full my-6 py-4 bg-red-600 rounded-md text-white font-bold"
          >
            Supprimer mon compte
          </button>
        </div>
      </section>
      {/* The user can only access to his own profile */}
      {slug !== connectedId.toString() ? <Redirect to="/" /> : ""}
    </div>
  )
}

Profile.propTypes = {
  connectedId: PropTypes.number.isRequired,
  fetchUser: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  handleUserEdit: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
}
export default Profile
