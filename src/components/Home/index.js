import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./styles.css"
import Card from "src/components/Card/index"
import UserPanel from "src/containers/UserPanel/index"
import Modal from "src/components/Modal/index"
import Loading from "src/components/Loading/index"

const Home = ({
  popularStories,
  fetchPopularStories,
  loadingPopular,
  showLoadingPopular,
}) => {
  useEffect(() => {
    showLoadingPopular()
    fetchPopularStories()
  }, [showLoadingPopular, fetchPopularStories])
  // state for loading
  // Modal state, display on button or hidden when closing it
  const [showModal, setModal] = useState(false)

  // Const for story id
  const [storyId, setStoryId] = useState(null)

  // Change modal current state and set the story id
  const handleModal = (id) => {
    setStoryId(id)
    setModal(true)
  }

  return (
    <div className="home md:mt-32 mx-8 md:flex md:mt-16 md:justify-around">
      {/* Only when modal is open (true) -> Modal is display, and the event click/key can be use */}
      {showModal && (
        <Modal
          showModal={showModal}
          onClose={() => setModal(false)}
          storyId={storyId}
        />
      )}

      {/* Display UserPanel for mobile device */}
      <section className="home__user home__user--desktop hidden mt-8 sm:block md:block md:order-1 md:w-1/3">
        <UserPanel />
      </section>
      <section className="home__stories my-16 sm:my-8 md:w-2/3 md:my-0 md:mr-12">
        <section className="home__popular mb-12 mt-4">
          <h1 className="home__title uppercase text-white text-4xl font-light ">
            Populaires
          </h1>

          {!loadingPopular ? (
            <ul className="home__list-popular">
              {popularStories.map((story) => (
                <Card key={story.id} {...story} handleModal={handleModal} />
              ))}
            </ul>
          ) : (
            <Loading
              type="Bars"
              color="#5BC1FF"
              heightValue={100}
              widthValue={100}
            />
          )}
        </section>
        <section className="home__latest">
          <h1 className="home__title uppercase text-white text-3xl font-bold">
            Nouveautés
          </h1>

          <ul className="home__list-latest"></ul>
        </section>
      </section>
    </div>
  )
}

Home.propTypes = {
  fetchPopularStories: PropTypes.func.isRequired,
  popularStories: PropTypes.array.isRequired,
  loadingPopular: PropTypes.bool.isRequired,
  showLoadingPopular: PropTypes.func.isRequired,
}
export default Home
