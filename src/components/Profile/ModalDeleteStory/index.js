import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import "./styles.css"

const ModalAvatar = ({ showModalDeleteStory, onClose }) => {
  // display the modal when the user click on the delete button in UserProfile
  const displayModal = showModalDeleteStory === true ? "block" : "hidden"

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

  return (
    <div
      className={`modale-delete h-screen w-screen ${displayModal} fixed z-40 flex flex-col justify-center`}
    >
      <div
        className="w-3/4 mx-auto md:max-w-6xl relative bg-gray-200 opacity-100 rounded-lg"
        ref={ref}
      >
        <button
          className="modale-delete__close h-12 w-12 bg-red-500 text-white font-bold absolute rounded-full"
          type="button"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="modale-delete__content p-3">
          <h1 className="modale-delete__title text-2xl font-bold text-center mb-2">
            Confirmer la suppression de l'histoire ?
          </h1>
        </div>
      </div>
    </div>
  )
}

ModalAvatar.propTypes = {
  showModalDeleteStory: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setAvatar: PropTypes.func.isRequired,
}
export default ModalAvatar
