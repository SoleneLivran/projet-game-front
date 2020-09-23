import React from "react"
import PropTypes from "prop-types"
import "./styles.css"

const Card = ({
  id,
  author,
  category,
  difficulty,
  pictureFile,
  rating,
  title,
  handleModal,
}) => (
  <div className="rounded-lg ">
    <li
      className="card transform duration-150 ease-in-out cursor-pointer mt-5 hover:scale-105"
      onClick={() => handleModal(id)}
    >
      <img
        className="card__img h-24 md:h-32 w-full object-cover rounded-t-lg shadow-lg"
        src="/assets/img/event_dragon.jpg"
        alt={`img_${title}`}
      />
      <section className="card__info bg-gray-900 py-4">
        <div className="card__top-info flex justify-center pt-1 px-5 items-center">
          <h2 className="card__title-top text-2xl font-bold py-2 text-white text-center overflow-auto">
            "{title}"
          </h2>
        </div>
        <hr className="card__fade" />
        <div className="card__bottom-info font-light text-lg  grid grid-cols-3 py-1 px-2 text-sm text-white items-center overflow-auto">
          <h3 className="card__title-bottom text-center p-1 overflow-hidden h-8">
            {author.name}
          </h3>
          <p className="card__category italic text-center p-1">{category.name}</p>
          <p className="card__difficulty text-center p-1">
            {difficulty}/5 <i className="px-2 fas fa-star text-yellow-500"></i>
          </p>
        </div>
      </section>
    </li>
  </div>
)

Card.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  difficulty: PropTypes.number.isRequired,
  pictureFile: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleModal: PropTypes.func.isRequired,
}
export default Card
