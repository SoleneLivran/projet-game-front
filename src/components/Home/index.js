import React from "react"
import "./styles.css"
import Card from "src/components/Card/index"
import UserPanel from "src/components/UserPanel/index"

const Home = () => (
  <div className="home md:mt-32 mx-8 md:flex md:my-16 md:justify-around">
    <section className="home__user-mobile hidden mt-8 sm:block md:hidden">
      <UserPanel />
    </section>
    <section className="home__stories my-16 sm:my-8 md:w-2/3 md:my-0 md:mr-12">
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
    <section className="home__user-desktop hidden mt-24 md:block md:w-1/3">
      <UserPanel />
    </section>
  </div>
)

export default Home
