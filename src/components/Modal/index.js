import React, { useState, useEffect, useRef } from "react"
import "./styles.css"

const Modal = ({ showModal, onClose }) => {
  const displayModal = showModal === true ? "block" : "hidden"
  const ref = useRef(null)
  useEffect(() => {
    document.addEventListener("click", clickListener)
    document.addEventListener("keyup", escapeListener)
    return () => {
      document.removeEventListener("click", clickListener)
      document.removeEventListener("keyup", escapeListener)
    }
  }, [])

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
      className={`modal h-screen w-screen ${displayModal} absolute z-40 flex flex-col justify-center`}
    >
      <div
        className="h-64 w-3/4 mx-auto md:max-w-6xl relative bg-gray-200 opacity-100"
        ref={ref}
      >
        <button
          className="modal__close h-12 w-12 bg-red-500 text-white font-bold absolute rounded-full"
          type="button"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="modal__content">
          <h1 className="modal__title">Title</h1>
          <p className="modal__synopsis">Synopsis</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
