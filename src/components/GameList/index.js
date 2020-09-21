import React from "react"
import Card from "src/components/Card/index"
import Filter from "src/components/Filter/index"
import "./styles.css"

const GameList = () => (
  <div className="gamelist mt-4 mx-4">
    <h1 className="gamelist__title uppercase text-white text-2xl font-light text-center my-2">
      Sélectionner un scénario
    </h1>
    <button className="gamelist__button bg-gray-200 py-2 w-full rounded-lg text-xl my-1 shadow-lg">
      Voir les filtres
    </button>
    <aside className="gamelist__filter bg-gray-200 px-6 py-2 rounded-lg">
      <h2 className="gamelist__filter-title text-xl font-bold my-2">
        Affiner les histoire
      </h2>
      <div className="filter__blog">
        <Filter title="Categories" />
      </div>
    </aside>
    <section className="gameList__display">
      <div className="dropdown bg-gray-200 rounded-lg my-2 p-4 flex flex-col">
        <div className="dropdown__list flex items-center my-1">
          <label htmlFor="dropdown" className="dropdown__label">
            Afficher par:
          </label>
          <select
            name="filter-by"
            id="filter-by"
            className="dropdown__select bg-transparent border rounded-sm border-black w-7/12 mx-auto py-1"
          >
            <option value="name">Nom (défaut)</option>
            <option value="popularity">Date de publication</option>
            <option value="difficulty">Difficulté</option>
            <option value="category">Categorie</option>
            <option value="popularity">Populaire</option>
          </select>
        </div>
        <div className="dropdown__inverse flex items-center my-1">
          <label className="dropdown__label pr-2" htmlFor="checkbox-reverse">
            Inverser l'ordre
          </label>
          <input type="checkbox" name="reverse" id="reverse" />
        </div>
      </div>
      <ul className="gamelist__list mt-4 py-4">
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
        </li>{" "}
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
