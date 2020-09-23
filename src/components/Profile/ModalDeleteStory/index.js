import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import axios from "axios"

const ModalDeleteStory = ({
  showModalDeleteStory,
  onClose,
  storyId,
  setstoryId,
  refreshStory,
}) => {
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

  const deleteStory = () => {
    axios
      .delete(
        `http://ec2-18-234-186-84.compute-1.amazonaws.com/api/stories/${storyId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      )
      .then((response) => {
        console.log(response)
        onClose()
        setstoryId(null)
        refreshStory()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div
      className={`modal-delete h-screen w-screen ${displayModal} fixed z-40 flex flex-col justify-center`}
    >
      <div
        className="w-3/4 mx-auto md:max-w-6xl relative bg-gray-200 opacity-100 rounded-lg"
        ref={ref}
      >
        <button
          className="modal-delete__close h-12 w-12 bg-red-500 text-white font-bold absolute rounded-full"
          type="button"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="modal-delete__content p-3">
          <h1 className="modal-delete__title text-2xl font-bold text-center mb-2">
            Confirmer la suppression de l'histoire ?
          </h1>
          <div className="modal-delete__buttons flex flex-col items-center sm:flex-row sm:justify-center">
            <button
              onClick={() => deleteStory()}
              className="modal-delete__agree bg-red-500 w-8/12 p-2 rounded-lg my-3 sm:w-56 sm:mx-1 md:mx-4 md:w-64"
            >
              Supprimer l'histoire
            </button>
            <button
              onClick={() => onClose()}
              className="modal-delete__close w-8/12 p-2 bg-green-400 rounded-lg my-3 sm:w-56 sm:mx-1 md:mx-4 md:w-64"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

ModalDeleteStory.propTypes = {
  showModalDeleteStory: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  storyId: PropTypes.number.isRequired,
  setstoryId: PropTypes.func.isRequired,
  refreshStory: PropTypes.func.isRequired,
}
export default ModalDeleteStory
