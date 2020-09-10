import React from "react"
import "./styles.css"

const Card = () => (
  <li className="card rounded">
    <img
      className="card__img h-24 w-full object-cover border-b-2 border-gray-700"
      src="/assets/img/dragon.jpg"
      alt=""
    />
    <section className="card__info bg-gray-900 py-4">
      <div className="card__top-info flex justify-between py-4 px-5">
        <h2>Game Where I'm The Hero</h2>
        <span>Rating</span>
      </div>
      <hr className="card__fade" />
      <div className="card__bottom-info flex justify-around py-4 px-2">
        <h3>GWITH</h3>
        <p>Heroic-Fantasy</p>
        <p>Hardcore</p>
      </div>
    </section>
  </li>
)

export default Card
