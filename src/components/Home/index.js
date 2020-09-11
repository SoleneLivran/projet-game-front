import React from "react"
import PropTypes from "prop-types"
import "./styles.css"
import Card from "src/components/Card/index"

const Home = ({ popularStories }) => (
  <div className="home md:mt-32">
    <section className="home__stories mx-8 my-16">
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
  </div>
)

Home.propTypes = {
  popularStories: PropTypes.array.isRequired,
}
export default Home
