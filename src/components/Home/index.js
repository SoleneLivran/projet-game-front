import React, { useState } from "react"
import PropTypes from "prop-types"
import "./styles.css"
import Card from "src/components/Card/index"
import UserPanel from "src/components/UserPanel/index"
import Modal from "src/components/Modal/index"

const Home = ({ popularStories }) => {
  // Modal state, display on button or hidden when closing it
  const [showModal, setModal] = useState(false)

  // Change modal current state
  const handleModal = () => setModal(true)

  return (
    <div className="home md:mt-32 mx-8 md:flex md:my-16 md:justify-around">
      {/* Only when modal is open (true) -> Modal is display, and the event click/key can be use */}
      {showModal && <Modal showModal={showModal} onClose={() => setModal(false)} />}

      {/* Display UserPanel for mobile device */}
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
              <Card key={story.id} {...story} handleModal={handleModal} />
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
      {/* Display pannel for medium screen */}
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
