import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import "./styles.css"

const ModalAvatar = ({ showModalAvatar, onClose, setAvatar, connectedId }) => {
  // display the modal when the user click on the delete button in UserProfile
  const displayModal = showModalAvatar === true ? "block" : "hidden"

  // state for avatars list
  const [avatars, setAvatars] = useState([])

  // useRef to define a current object => only the modal part who display content
  const ref = useRef(null)

  // useEffect only when the component is mounted
  // Remove the listener for performance and avoid error between many listener
  useEffect(() => {
    document.addEventListener("click", clickListener)
    document.addEventListener("keyup", escapeListener)
    return () => {
      document.removeEventListener("click", clickListener)
      document.removeEventListener("keyup", escapeListener)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // true if the ref object exist and the click is not on it
  const clickListener = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose()
    }
  }

  const escapeListener = (e) => {
    if (e.code === "Escape") {
      onClose()
    }
  }

  const fetchAvatars = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BACK}/api/avatars`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      })
      .then((response) => {
        setAvatars(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const setAvatarRequest = (pictureFile, id) => {
    axios
      .put(
        `${process.env.REACT_APP_SERVER_BACK}/api/account/${connectedId}/avatar`,
        {
          avatar: id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      )
      .then((response) => {
        console.log(response)
        setAvatar(pictureFile, id)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => fetchAvatars(), [])

  return (
    <div
      className={`modal-avatar h-screen w-screen ${displayModal} fixed z-40 flex flex-col justify-center`}
    >
      <div
        className="w-3/4 mx-auto md:max-w-6xl relative bg-gray-200 opacity-100 rounded-lg"
        ref={ref}
      >
        <button
          className="modal-avatar__close z-40 h-12 w-12 bg-red-500 text-white font-bold absolute rounded-full"
          type="button"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="modal-avatar__content p-3">
          <h1 className="modal-avatar__title text-2xl font-bold text-center mb-2">
            Choix d'un avatar
          </h1>
          <ul className="modal-avatar__list flex flex-wrap overflow-y-auto p-4">
            {avatars.map((avatar) => (
              <li key={avatar.id} className="modal-avatar__item-img w-1/2">
                <img
                  src={`/assets/img/${avatar.pictureFile}.jpg`}
                  alt={avatar.pictureFile}
                  className="modal-avatar__img h-24 w-24 rounded-full my-4 mx-auto cursor-pointer transform hover:scale-110"
                  onClick={() => {
                    setAvatarRequest(avatar.pictureFile, avatar.id)
                    onClose()
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

ModalAvatar.propTypes = {
  showModalAvatar: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  connectedId: PropTypes.number.isRequired,
  setAvatar: PropTypes.func.isRequired,
}
export default ModalAvatar
