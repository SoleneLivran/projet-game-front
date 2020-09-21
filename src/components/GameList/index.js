import React, { useEffect, useState } from "react"
import axios from "axios"

import Card from "src/components/Card/index"
import Filter from "src/components/Filter/index"
import Loading from "src/components/Loading/index"

import difficulties from "src/datas/difficulties"
import "./styles.css"
import { fetchLatestStories } from "src/actions/home"

const GameList = () => {
  // Set the category after request, empty array default
  const [categoriesList, setCategoriesList] = useState([])

  // state for filter loading
  const [loadingFilter, setLoadingFilter] = useState(true)

  // Set the category after request, empty array default
  const [storiesList, setStoriesList] = useState([])

  // state for filter loading
  const [loadingStories, setLoadingStories] = useState(true)

  // state to define the radio checked and set the value
  const [selectedRadioValue, setSelectedRadioValue] = useState("")

  // state to display filter in mobile screen
  const [displayFilter, setDisplayFilter] = useState(false)
  // state displayFilter return different class for the aside bloc
  const asideFilterClassName = displayFilter
    ? "opacity-100 gamelist__filter--active"
    : "opacity-0"

  // API Request for categories list
  const fetchCategories = () => {
    axios
      .get(
        "http://ec2-18-234-186-84.compute-1.amazonaws.com/api/public/story_categories"
      )
      .then((response) => {
        console.log(response)
        setCategoriesList(response.data)
      })
      .catch((error) => {
        console.log("error")
      })
  }

  const fetchStories = () => {
    axios
      .get("http://ec2-18-234-186-84.compute-1.amazonaws.com/api/public/stories")
      .then((response) => {
        console.log(response)
        setStoriesList(response.data)
      })
      .catch((error) => {
        console.log("error")
      })
  }

  // Initiate the request for categories list when Component is mounted
  useEffect(() => {
    fetchCategories()
    fetchStories()
  }, [])

  // Loading is unset when categories is set after success request API
  useEffect(() => {
    if (categoriesList.length > 0) {
      setLoadingFilter(false)
    }
  }, [categoriesList])

  useEffect(() => {
    if (storiesList.length > 0) {
      setLoadingStories(false)
    }
  }, [storiesList])

  return (
    <div className="gamelist mt-4 mx-8 h-auto">
      <h1 className="gamelist__title uppercase text-white text-2xl font-light text-center my-2">
        Sélectionner un scénario
      </h1>
      <button
        name="button-display-filter"
        onClick={() => setDisplayFilter(!displayFilter)}
        className="gamelist__button bg-gray-200 py-2 w-full rounded-lg text-xl my-1 shadow-lg"
      >
        Voir les filtres
      </button>
      <aside
        className={`gamelist__filter overflow-hidden ${asideFilterClassName} bg-gray-200 px-6 rounded-lg`}
      >
        <h2 className="gamelist__filter-title text-xl font-bold my-2 px-6">
          Affiner les histoire
        </h2>
        <div className="filter__blog flex justify-around mb-2">
          {loadingFilter && (
            <Loading type="Oval" color="#5BC1FF" heightValue={50} widthValue={50} />
          )}
          {!loadingFilter && (
            <Filter
              title="Categories"
              datas={categoriesList}
              setSelectedRadioValue={setSelectedRadioValue}
              selectedRadioValue={selectedRadioValue}
            />
          )}
          {!loadingFilter && (
            <Filter
              title="Difficultés"
              datas={difficulties}
              setSelectedRadioValue={setSelectedRadioValue}
              selectedRadioValue={selectedRadioValue}
            />
          )}
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
        {!loadingStories ? (
          <ul className="gamelist__list mt-8">
            {storiesList.map((story) => (
              <Card key={story.id} {...story} />
            ))}
            {storiesList.map((story) => (
              <Card key={story.id} {...story} />
            ))}
            {storiesList.map((story) => (
              <Card key={story.id} {...story} />
            ))}
          </ul>
        ) : (
          <div className="home__loading-latest flex justify-center mt-4">
            <Loading type="Bars" color="#5BC1FF" heightValue={50} widthValue={50} />
          </div>
        )}
      </section>
    </div>
  )
}

export default GameList
