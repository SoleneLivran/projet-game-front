import React from "react"
import "./styles.css"
import Card from "src/components/Card/index"
import UserPanel from "src/components/UserPanel/index"

const Home = () => (
  <div className="home md:mt-32 mx-8">
    <section className="home__user hidden sm:block md:hidden">
      <UserPanel />
    </section>
    <section className="home__stories my-16 sm:my-8 md:my-16 ">
      <h1 className="home__title uppercase text-white text-3xl font-bold">
        Populaires
      </h1>
      <section className="home__popular mb-12 mt-4">
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
