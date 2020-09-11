import React, { useState, useEffect, useRef } from "react"
import "./styles.css"

const Modal = ({ showModal, onClose }) => {
  const displayModal = showModal === true ? "block" : "hidden"
  const ref = useRef(null)
  useEffect(() => {
    document.addEventListener("click", clickListener)
    return () => {
      document.removeEventListener("click", clickListener)
    }
  }, [])

  const clickListener = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose()
    }
  }

  return (
    <div ref={ref} className={`modal h-64 w-64 bg-gray-100 ${displayModal}`}>
      <button className="modal__close h-8 w-8 bg-red-200" type="button">X</button>
      <div className="modal__content">
        <h1 className="modal__title">Title</h1>
        <p className="modal__synopsis">Synopsis</p>
      </div>
    </div>
  )
}

export default Modal
