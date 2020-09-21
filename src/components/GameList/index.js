import React from "react"
import Card from "src/components/Card/index"
import "./styles.css"

const GameList = () => (
  <div className="gamelist">
    <h1 className="gamelist__title">Sélectionner un scénario</h1>
    <aside className="gamelist__filter">
      <div className="filter__categories">
        <h2 className="filter__title">Genre</h2>
        <div className="filter__radio">
          <label htmlFor="category1">
            <input type="radio" name="category1" id="category1" value="category1" />
            Category1
          </label>
        </div>
        <div className="filter__radio">
          <label htmlFor="category2">
            <input type="radio" name="category2" id="category2" value="category2" />
            Category2
          </label>
        </div>
        <div className="filter__radio">
          <label htmlFor="category3">
            <input type="radio" name="category3" id="category3" value="category3" />
            Category3
          </label>
        </div>
        <div className="filter__radio">
          <label htmlFor="category4">
            <input type="radio" name="category4" id="category4" value="category4" />
            Category4
          </label>
        </div>
        <div className="filter__radio">
          <label htmlFor="category5">
            <input type="radio" name="category5" id="category5" value="category5" />
            Category5
          </label>
        </div>
      </div>
      <div className="filter__difficulties">
        <h2 className="filter__title">Difficultés</h2>
        <div className="filter__radio">
          <label htmlFor="category1">
            <input type="radio" name="category1" id="category1" value="category1" />
            Category1
          </label>
        </div>
        <div className="filter__radio">
          <label htmlFor="category2">
            <input type="radio" name="category2" id="category2" value="category2" />
            Category2
          </label>
        </div>
        <div className="filter__radio">
          <label htmlFor="category3">
            <input type="radio" name="category3" id="category3" value="category3" />
            Category3
          </label>
        </div>
        <div className="filter__radio">
          <label htmlFor="category4">
            <input type="radio" name="category4" id="category4" value="category4" />
            Category4
          </label>
        </div>
        <div className="filter__radio">
          <label htmlFor="category5">
            <input type="radio" name="category5" id="category5" value="category5" />
            Category5
          </label>
        </div>
      </div>
    </aside>
    <section className="gameList__display">
      <div className="gamelist__dropdown">
        <label htmlFor="dropdown" className="dropdown__title">
          Afficher par:
        </label>
        <select name="filter-by" id="filter-by" className="dropdown__select">
          <option value="name">Nom</option>
          <option value="date">Date</option>
          <option value="difficulty">Difficulté</option>
          <option value="category">Categorie</option>
        </select>
      </div>
      <ul className="gamelist__list">
        <li className="card transform duration-150 ease-in-out cursor-pointer mt-5 hover:scale-105">
          <img
            className="card__img h-24 md:h-32 w-full object-cover rounded-t-lg shadow-lg"
            src="/assets/img/dragon.jpg"
          />
          <section className="card__info bg-gray-900 py-4">
            <div className="card__top-info flex justify-center pt-1 px-5 items-center">
              <h2 className="card__title-top text-2xl font-bold py-2 text-white text-center overflow-auto">
                title
              </h2>
            </div>
            <hr className="card__fade" />
            <div className="card__bottom-info font-light text-lg  grid grid-cols-3 py-1 px-2 text-sm text-white items-center overflow-auto">
              <h3 className="card__title-bottom text-center p-1 overflow-hidden h-8">
                Auteur
              </h3>
              <p className="card__category italic text-center p-1">category </p>
              <p className="card__difficulty text-center p-1">
                /5 <i className="px-2 fas fa-star text-yellow-500"></i>
              </p>
            </div>
          </section>
        </li>
      </ul>
    </section>
  </div>
)

export default GameList
