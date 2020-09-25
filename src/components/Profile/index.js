import React, { useState, useEffect } from "react"
import { useParams, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import "./styles.css"
import FieldProfile from "src/containers/FieldProfile/index"
import Story from "./Story/index"
import ModalDeleteUser from "./ModalDeleteUser/index"
import ModalAvatar from "src/containers/ModalAvatar/index"
import ModalDeleteStory from "./ModalDeleteStory/index"
import Loading from "src/components/Loading/index"

import { checkInput, fetchUserStories } from "src/selectors/profile"

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
  const [showModalDeleteUser, setModalDeleteUser] = useState(false)
  const [showModalAvatar, setModalAvatar] = useState(false)
  const [showModalDeleteStory, setModalDeleteStory] = useState(false)
  const [avatarFile, setAvatarFile] = useState("")

  // state for story list written by connected user
  const [userStoriesList, setUserStoriesList] = useState([])

  // state for loading stories
  const [loadingStories, setLoadingStories] = useState(true)

  // state storyId for delete request
  const [storyId, setstoryId] = useState(null)

  // state for loading avatar
  const [avatarLoading, setLoadingAvatar] = useState(true)

  // Change modal current state
  const handleModalDeleteUser = () => setModalDeleteUser(true)
  const handleModalAvatar = () => setModalAvatar(true)

  // Change modal delete current state & set the selected story
  const handleModalDeleteStory = (storyId) => {
    setstoryId(storyId)
    setModalDeleteStory(true)
  }

  const refreshStory = () => {
    setLoadingStories(true)
    fetchUserStories(setUserStoriesList, connectedId)
  }

  const errors = checkInput(name, mail, password, newPassword)

  // Get current user data, API GET request in user middleware:
  useEffect(() => {
    fetchUser()
    fetchUserStories(setUserStoriesList, connectedId)
  }, [fetchUser, connectedId])

  // Loading is unset when stories is set after success request API
  useEffect(() => {
    setTimeout(() => {
      setLoadingStories(false)
    }, 1000)
  }, [userStoriesList])

  useEffect(() => {
    setTimeout(() => {
      setLoadingAvatar(false)
    }, 1000)
  }, [avatar])
  return (
    <div className="profile px-8 h-auto sm:px-16 sm:mt-10 sm:px-24 md:mx-auto md:mt-20">
      {/* Only when modal is open (true) -> Modal is display, and the event click/key can be use */}
      {showModalDeleteUser && (
        <ModalDeleteUser
          showModalDeleteUser={showModalDeleteUser}
          onClose={() => setModalDeleteUser(false)}
          handleDeleteUser={handleDeleteUser}
          connectedId={connectedId}
        />
      )}
      {showModalAvatar && (
        <ModalAvatar
          showModalAvatar={showModalAvatar}
          onClose={() => setModalAvatar(false)}
          connectedId={connectedId}
        />
      )}
      {showModalDeleteStory && (
        <ModalDeleteStory
          showModalDeleteStory={showModalDeleteStory}
          onClose={() => setModalDeleteStory(false)}
          storyId={storyId}
          setstoryId={setstoryId}
          refreshStory={refreshStory}
        />
      )}
      <section className="profile__stories mt-4 border-b-4 py-8">
        <h1 className="stories__title uppercase text-white text-3xl font-light">
          Mes histoires
        </h1>
        <p className="text-xs text-white italic">
          La fonction d'édition sera prochainement proposée
        </p>
        <ul className="stories__list my-6 overflow-y-auto">
          {loadingStories && (
            <div className="stories__loading flex justify-center">
              <Loading
                type="Oval"
                color="#5BC1FF"
                heightValue={50}
                widthValue={50}
              />
            </div>
          )}
          {!loadingStories &&
            userStoriesList.map((story) => (
              <Story
                key={story.id}
                id={story.id}
                title={story.title}
                status={story.status}
                handleModalDeleteStory={handleModalDeleteStory}
              />
            ))}

          {!loadingStories && userStoriesList.length === 0 && (
            <p className="text-center text-white">Aucune histoires créées</p>
          )}
        </ul>
      </section>
      <section className="profile__user mt-10 md:flex justify-around">
        <div className="profile__left-panel flex flex-col w-64 mx-auto md:mx-0 justify-center my-6 items-center md:mb-20">
          {avatarLoading ? (
            <Loading type="Oval" color="#5BC1FF" heightValue={40} widthValue={40} />
          ) : avatar === null ? (
            <p className="profile__img-null mb-2 text-white italic">
              Pas encore d'avatar
            </p>
          ) : (
            <img
              src={`/assets/img/${avatar.pictureFile}.jpg`}
              alt=""
              className="profile__img w-40 h-40 md:w-56 md:h-56 rounded-full"
            />
          )}
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
              if (Object.keys(errors).length === 0) {
                handleUserEdit()
              }
            }}
            className="profile__form flex flex-col"
          >
            <label className="profile__label mt-2 text-white" htmlFor="username">
              Nom d'utilisateur
            </label>
            <FieldProfile
              type="text"
              name="username"
              placeholder="Nom d'utilisateur"
            />
            <label className="profile__label mt-2 text-white" htmlFor="email">
              Email
            </label>
            <FieldProfile type="email" name="email" placeholder="Email" />

            <label className="profile__label mt-2 text-white" htmlFor="password">
              Mot de passe actuel
            </label>
            <FieldProfile
              type="password"
              name="password"
              placeholder="Mot de passe"
            />
            <label className="profile__label mt-2 text-white" htmlFor="password">
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
            onClick={() => handleModalDeleteUser()}
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
  avatar: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  handleUserEdit: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
}
export default Profile
