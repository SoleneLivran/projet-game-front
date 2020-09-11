import React, { useState } from "react"
import PropTypes from "prop-types"
import "./styles.css"
import Card from "src/components/Card/index"
import UserPanel from "src/components/UserPanel/index"
import Modal from "src/components/Modal/index"

const Home = ({ popularStories }) => {
  // Modal state, display on button or hiddne when closing it
  const [showModal, setModal] = useState(false)
  const handleModal = () => setModal(true)

  return (
    <div className="home md:mt-32 mx-8 md:flex md:my-16 md:justify-around">
      {showModal && <Modal showModal={showModal} onClose={() => setModal(false)} />}
      <button
        onClick={() => handleModal()}
        className="w-16 h-16 bg-blue-500"
        type="button"
      >
        Button
      </button>
      <section className="home__user-mobile hidden mt-8 sm:block md:hidden">
        <UserPanel />
      </section>
      <section className="home__stories my-16 sm:my-8 md:w-2/3 md:my-0 md:mr-12">
        <h1 className="home__title uppercase text-white text-3xl font-bold">
          Populaires
        </h1>
        <section className="home__popular mb-12 mt-4">
          <ul className="home__list-popular">
            {popularStories.map((story) => (
              <Card key={story.id} {...story} />
            ))}
          </ul>
        </section>
        <h1 className="home__title uppercase text-white text-3xl font-bold">
          Nouveautés
        </h1>
        <section className="home__latest">
          <ul className="home__list-latest"></ul>
        </section>
      </section>
      <section className="home__user-desktop hidden mt-24 md:block md:w-1/3">
        <UserPanel />
      </section>
    </div>
  )
}

Home.propTypes = {
  popularStories: PropTypes.array.isRequired,
}
export default Home
