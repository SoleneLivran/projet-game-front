import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import "./styles.css"
import { Redirect } from "react-router-dom"

const ModalDelete = ({ showModalDelete, onClose, handleDeleteUser }) => {
  // State for modal, button agree default is disabled
  const [buttonActive, setButtonActive] = useState(true)

  const [isDeleted, setIsDeleted] = useState(false)

  // CHange the color of button, depends of the checkbox's state
  const buttonActiveClassName = buttonActive
    ? "bg-gray-600 cursor-not-allowed"
    : "bg-green-500 cursor-pointer"

  // display the modal when the user click on the delete button in UserProfile
  const displayModal = showModalDelete === true ? "block" : "hidden"

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

  // onChange on modal, button is active/disabled
  const handleInputCheckbox = () => {
    setButtonActive(!buttonActive)
  }

  const deleteUser = () => {
    axios
      .delete("http://ec2-18-234-186-84.compute-1.amazonaws.com/api/account", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      })
      .then((response) => {
        console.log(response)
        setIsDeleted(true)
        handleDeleteUser()
        localStorage.removeItem("user")
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
            ATTENTION !
          </h1>
          <p className="modal-delete__synopsis text-center mb-2">
            La suppression de votre compte entrainera également la{" "}
            <span className="font-bold">
              {" "}
              suppression totale des histoires créées depuis ce compte. <br />
              Il ne sera plus possible de les récupérer.
            </span>
            <br />
          </p>
          <label className="modal-delete__checkbox flex justify-center items-center my-4">
            <input
              type="checkbox"
              name="checkbox-confirm"
              onChange={() => handleInputCheckbox()}
              className="mr-2"
            />
            J'ai bien compris
          </label>
          <div className="modal-delete__buttons flex flex-col items-center">
            <button
              className={`modal-delete__agree w-8/12 sm:w-64 p-2 rounded-lg my-3 ${buttonActiveClassName}`}
              disabled={buttonActive}
              onClick={() => deleteUser()}
            >
              Supprimer mon compte
            </button>
            <button
              onClick={() => onClose()}
              className="modal-delete__close w-8/12 sm:w-64 p-2 bg-red-500 rounded-lg my-3"
            >
              Je ne souhaite pas supprimer mon compte
            </button>
          </div>
        </div>
      </div>
      {isDeleted && <Redirect to="/" />}
    </div>
  )
}

export default ModalDelete
