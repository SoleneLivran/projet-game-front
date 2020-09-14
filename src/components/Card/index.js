import React from "react"
import PropTypes from "prop-types"
import "./styles.css"

const Card = ({ author, category, difficulty, pictureFile, rating, title, handleModal }) => (
  // <li className="card border-0 rounded">
  //   <img
  //     className="card__img h-24 md:h-32 w-full object-cover border-b-2 border-gray-700"
  //     src="/assets/img/dragon.jpg"
  //     alt=""
  //   />
  //   <section className="card__info bg-gray-900 py-4">
  //     <div className="card__top-info flex justify-between pt-1 px-5 items-center">
  //       <h2 className="card__title-top text-xl text-white w-2/3 overflow-auto">
  //         Game Where I'm The Hero
  //       </h2>
  //       <span className="card__rating w-1/3 text-center">Rating</span>
  //     </div>
  //     <hr className="card__fade" />
  //     <div className="card__bottom-info grid grid-cols-3 py-1 px-2 text-sm text-white divide-x divide-gray-700 divide-opacity-50 items-center overflow-auto">
  //       <h3 className="card__title-bottom text-center p-1 overflow-auto h-8">Bob</h3>
  //       <p className="card__category italic text-center p-1">Heroic-Fantasy</p>
  //       <p className="card__difficulty text-center p-1">Hardcore</p>
  //     </div>
  //   </section>
  // </li>
  <li className="card border-0 rounded cursor-pointer" onClick={() => handleModal()}>
    <img
      className="card__img h-24 md:h-32 w-full object-cover border-b-2 border-gray-700"
      src={pictureFile}
      alt={`img_${title}`}
    />
    <section className="card__info bg-gray-900 py-4">
      <div className="card__top-info flex justify-between pt-1 px-5 items-center">
        <h2 className="card__title-top text-xl text-white w-2/3 overflow-auto">
          {title}
        </h2>
        <span className="card__rating w-1/3 text-center">{rating}</span>
      </div>
      <hr className="card__fade" />
      <div className="card__bottom-info grid grid-cols-3 py-1 px-2 text-sm text-white divide-x divide-gray-700 divide-opacity-50 items-center overflow-auto">
        <h3 className="card__title-bottom text-center p-1 overflow-auto h-8">
          {author.name}
        </h3>
        <p className="card__category italic text-center p-1">{category.name}</p>
        <p className="card__difficulty text-center p-1">{difficulty}/5</p>
      </div>
    </section>
  </li>
)

Card.propTypes = {
  author: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  difficulty: PropTypes.number.isRequired,
  pictureFile: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleModal: PropTypes.func.isRequired,
}
export default Card
