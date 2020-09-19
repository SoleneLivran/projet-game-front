import Axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import Loading from "src/components/Loading/index"
import "./styles.css"

const Modal = ({ showModal, onClose }) => {
  const displayModal = showModal === true ? "block" : "hidden"
  const [loading, setLoading] = useState(false)
  const [story, setStory] = useState([])
  const [error, setError] = useState([])

  // useRef to define a current object => only the modal part who display content
  const ref = useRef(null)

  // useEffect only when the component is mounted
  // Remove the listener for performance and avoid error between many listener
  useEffect(() => {
    document.addEventListener("click", clickListener)
    document.addEventListener("keyup", escapeListener)
    // fetchStory()
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

  const fetchStory = () => {
    Axios.get(
      "http://ec2-18-234-186-84.compute-1.amazonaws.com/api/public/stories/1"
    )
      .then((response) => {
        console.log(response)
        setStory(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError("Erreur au chargement de l'histoire. Veuillez réessayer")
      })
  }

  return (
    <div
      className={`modal h-screen w-screen ${displayModal} fixed z-40 flex justify-center items-center`}
    >
      <div
        className="modal__container w-3/4 mx-auto md:max-w-6xl relative bg-gray-300 opacity-100 rounded-md flex justify-center items-center"
        ref={ref}
      >
        {loading && (
          <Loading type="Oval" color="#5054B1" heightValue={50} widthValue={50} />
        )}
        {!loading && (
          <div className="modal__story h-full w-full md:flex md:flex-col">
            <div className="modal__content m-2 p-4 shadow-2xl bg-gray-300 h-full">
              <h1 className="modal__title font-bold text-2xl text-center">
                Lorem ipsum dolor sit.
              </h1>
              <p className="modal__author text-center text-md my-2 text-gray-700">
                Par Toto
              </p>
              <p className="modal__category text-center text-sm my-2">Horreur</p>
              <p className="modal__synopsis text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quisquam est obcaecati dicta quo unde adipisci perspiciatis quis
                nesciunt corrupti id, commodi fugiat mollitia eligendi voluptatem
                dignissimos, doloremque fuga ea laboriosam odit laudantium odio
                explicabo? Maxime expedita quis minima porro necessitatibus,
                inventore cupiditate quibusdam consequuntur reprehenderit illum
                voluptatum unde accusamus minus dolore, iure nihil omnis ad quisquam
                velit magni provident? Voluptas, consequuntur officia? Veritatis
                dignissimos praesentium non culpa vero consequuntur, voluptatum
                voluptas, rerum reiciendis ducimus, necessitatibus a consectetur
                maxime voluptatibus quidem. Laudantium, quasi culpa neque velit
                itaque ratione temporibus doloremque sint ullam atque inventore fugit
                nobis totam perferendis aperiam a harum ab non explicabo eum ut nemo
                reprehenderit nostrum. Numquam aperiam placeat sit voluptatum cumque
                tempora similique incidunt neque quas temporibus sed consequatur
                voluptatibus eius distinctio labore sunt dicta ea, assumenda autem
                optio, ullam natus voluptas nihil quod. Laudantium voluptas hic iure!
                Maxime provident debitis quo, dolor ea dolore veritatis?
              </p>
            </div>
            <div className="modal__buttons flex justify-around w-full">
              <button className="modal__play w-24 my-2 py-4 bg-green-400 rounded-lg font-bold text-white sm:w-48 md:w-64">
                Jouer
              </button>
              <button
                className="modal__close w-24 py-4 my-2 bg-red-500 rounded-lg font-bold text-white sm:w-48 md:w-64"
                type="button"
                onClick={() => onClose()}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
