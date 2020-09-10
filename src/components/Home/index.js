import React from "react"
import "./styles.css"

const Home = () => (
  <div className="home">
    <h1 className="home__title">Populaires</h1>
    <section className="home__popular">
      <ul className="home__list-popular">
        <li className="home_item">Story 1</li>
        <li className="home_item">Story 2</li>
        <li className="home_item">Story 3</li>
      </ul>
    </section>
    <h1 className="home__title">Nouveautés</h1>
    <section className="home__latest">
      <ul className="home__list-latest">
        <li className="home_item">Story 1</li>
        <li className="home_item">Story 2</li>
        <li className="home_item">Story 3</li>
      </ul>
    </section>
  </div>
)

export default Home
