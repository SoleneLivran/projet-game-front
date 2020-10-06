import React from "react"
import PropTypes from "prop-types"
import "./styles.css"
import { findCategoryImg } from "src/selectors/card"

const Card = ({
  id,
  author,
  category,
  difficulty,
  pictureFile,
  rating,
  title,
  handleModal,
}) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rounded-lg ">
      <li
        className="card transform duration-150 ease-in-out cursor-pointer mt-5 hover:scale-105"
        onClick={() => handleModal(id)}
      >
        <img
          className="card__img h-24 md:h-32 w-screen object-cover object-center rounded-t-lg shadow-lg"
          src={`/assets/img/${findCategoryImg(category.name)}.jpg`}
          alt={`img_${findCategoryImg(category.name)}`}
        />
        <section className="card__info bg-gray-900 py-4">
          <div className="card__top-info flex justify-center pt-1 px-5 items-center">
            <h2 className="card__title-top text-2xl font-bold py-2 text-white text-center overflow-auto">
              "{title}"
            </h2>
          </div>
          <hr className="card__fade" />
          <div className="card__bottom-info font-light text-lg  grid grid-cols-3 py-1 px-2 text-white items-center overflow-auto capitalize">
            <h3 className="card__title-bottom text-sm text-center p-1 overflow-hidden h-8 sm:text-lg">
              {author.name}
            </h3>
            <p className="card__category italic text-sm text-center p-1 sm:text-lg">
              {category.name}
            </p>
            <div className="rating text-center overflow-auto px-1 text-sm sm:text-lg">
              {rating !== 0 ? (
                stars.map((star) => (
                  <i
                    key={star}
                    className={`${
                      rating >= star ? "fas" : "far"
                    } fa-star text-yellow-500`}
                  />
                ))
              ) : (
                <p className="rating__none normal-case">Sans notes</p>
              )}
            </div>
          </div>
        </section>
      </li>
    </div>
  )
}

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
