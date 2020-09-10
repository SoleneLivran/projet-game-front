import React from "react"
import "./styles.css"

const Card = () => (
  <li className="card border-0 rounded">
    <img
      className="card__img h-24 w-full object-cover border-b-2 border-gray-700"
      src="/assets/img/dragon.jpg"
      alt=""
    />
    <section className="card__info bg-gray-900 py-4">
      <div className="card__top-info flex justify-between pt-1 px-5 items-center">
        <h2 className="card__title-top text-xl text-white w-2/3 overflow-auto">Game Where I'm The Hero</h2>
        <span className="card__rating w-1/3 text-center">Rating</span>
      </div>
      <hr className="card__fade" />
      <div className="card__bottom-info grid grid-cols-3 py-1 px-2 text-sm text-white divide-x divide-gray-700 divide-opacity-50 items-center overflow-auto">
        <h3 className="card__title-bottom text-center p-1 overflow-auto h-8">Bob</h3>
        <p className="card__category italic text-center p-1">Heroic-Fantasy</p>
        <p className="card__difficulty text-center p-1">Hardcore</p>
      </div>
    </section>
  </li>
)

export default Card
