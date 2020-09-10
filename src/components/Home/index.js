import React from "react"
import "./styles.css"
import Card from "src/components/Card/index"

const Home = () => (
  <div className="home">
    <section className="home__stories mx-8 my-16">
      <h1 className="home__title uppercase text-white text-3xl font-bold">
        Populaires
      </h1>
      <section className="home__popular mb-12">
        <ul className="home__list-popular">
        <Card />
          <li className="home_item">Story 2</li>
          <li className="home_item">Story 3</li>
        </ul>
      </section>
      <h1 className="home__title uppercase text-white text-3xl font-bold">
        Nouveautés
      </h1>
      <section className="home__latest">
        <ul className="home__list-latest">
          <li className="home_item">Story 1</li>
          <li className="home_item">Story 2</li>
          <li className="home_item">Story 3</li>
        </ul>
      </section>
    </section>
  </div>
)

export default Home
