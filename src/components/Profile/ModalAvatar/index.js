import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import "./styles.css"

const ModalAvatar = ({ showModalAvatar, onClose, setAvatar }) => {
  // display the modal when the user click on the delete button in UserProfile
  const displayModal = showModalAvatar === true ? "block" : "hidden"

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
  }, [])

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

  return (
    <div
      className={`modal-avatar h-screen w-screen ${displayModal} fixed z-40 flex flex-col justify-center`}
    >
      <div
        className="w-3/4 mx-auto md:max-w-6xl relative bg-gray-200 opacity-100 rounded-lg overflow-y-auto"
        ref={ref}
      >
        <button
          className="modal-avatar__close h-12 w-12 bg-red-500 text-white font-bold absolute rounded-full"
          type="button"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="modal-avatar__content p-3">
          <h1 className="modal-avatar__title text-2xl font-bold text-center mb-2">
            Choix d'un avatar
          </h1>
          <ul className="modal-avatar__list flex flex-wrap">
            <li className="modal-avatar__item-img w-1/2">
              <img
                src="/assets/img/default_avatar.png"
                alt=""
                className="modal-avatar__img h-24 w-24 my-5 mx-auto cursor-pointer transform hover:scale-110"
                onClick={() => {
                  setAvatar("/assets/img/default_avatar.png")
                  onClose()
                }}
              />
            </li>
            <li className="modal-avatar__item-img w-1/2">
              <img
                src="/assets/img/default_avatar2.png"
                alt=""
                className="modal-avatar__img h-24 w-24 my-5 mx-auto cursor-pointer transform hover:scale-110"
                onClick={() => {
                  setAvatar("/assets/img/default_avatar2.png")
                  onClose()
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ModalAvatar.propTypes = {
  showModalAvatar: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setAvatar: PropTypes.func.isRequired,
}
export default ModalAvatar
