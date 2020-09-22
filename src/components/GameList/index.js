import React, { useEffect, useState } from "react"
import axios from "axios"

import Card from "src/components/Card/index"
import Filter from "src/components/Filter/index"
import Loading from "src/components/Loading/index"
import Modal from "src/components/Modal/index"
import Dropdown from "./Dropdown/index"

import difficulties from "src/datas/difficulties"
import { fetchCategories, fetchStories } from "src/selectors/gamelist"
import "./styles.css"

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
  const [selectedRadioValue, setSelectedRadioValue] = useState(0)

  // state to display filter in mobile screen
  const [displayFilter, setDisplayFilter] = useState(false)
  // state displayFilter return different class for the aside bloc
  const asideFilterClassName = displayFilter
    ? "opacity-100 gamelist__filter--active"
    : "opacity-0"

  // Modal state, display on button or hidden when closing it
  const [showModal, setModal] = useState(false)

  // Const for story id
  const [storyId, setStoryId] = useState(null)

  // Change modal current state and set the story id
  const handleModal = (id) => {
    setStoryId(id)
    setModal(true)
  }

  const handleOnResetFilter = () => {
    setSelectedRadioValue(0)
    fetchStories(setStoriesList)
  }

  const fetchFilterRequest = (filterId, filterTitle) => {
    if (filterId === 0) {
      return fetchStories(setStoriesList)
    }

    if (filterTitle === "Catégories") {
      axios
        .get(
          `http://ec2-18-234-186-84.compute-1.amazonaws.com/api/public/stories?story_category=${filterId}`
        )
        .then((response) => {
          console.log(response)
          setStoriesList(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    if (filterTitle === "Difficultés") {
      console.log("diff")
      axios
        .get(
          `http://ec2-18-234-186-84.compute-1.amazonaws.com/api/public/stories?difficulty=${filterId}`
        )
        .then((response) => {
          console.log(response)
          setStoriesList(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  const sortStories = (sortMethod, activeCheckbox) => {
    const copyStories = [...storiesList]
    console.log(activeCheckbox)
    switch (sortMethod) {
      case "name":
        setStoriesList(
          copyStories.sort((a, b) =>
            activeCheckbox
              ? b.title.localeCompare(a.title)
              : a.title.localeCompare(b.title)
          )
        )
        break
      case "category":
        setStoriesList(
          copyStories.sort((a, b) =>
            activeCheckbox
              ? b.category.name.localeCompare(a.category.name)
              : a.category.name.localeCompare(b.category.name)
          )
        )
        break
      case "difficulty":
        setStoriesList(
          copyStories.sort((a, b) =>
            activeCheckbox
              ? b.difficulty - a.difficulty
              : a.difficulty - b.difficulty
          )
        )
        break
      case "rating":
        setStoriesList(
          copyStories.sort((a, b) =>
            activeCheckbox ? b.rating - a.rating : a.rating - b.rating
          )
        )
        break
      case "date":
        setStoriesList(
          copyStories.sort((a, b) =>
            activeCheckbox
              ? b.publishedAt.localeCompare(a.publishedAt)
              : a.publishedAt.localeCompare(b.publishedAt)
          )
        )
        break
      default:
        break
    }
  }

  // Initiate the request for categories list when Component is mounted
  useEffect(() => {
    fetchCategories(setCategoriesList)
    fetchStories(setStoriesList)
  }, [])

  // Loading is unset when categories is set after success request API
  useEffect(() => {
    if (categoriesList.length > 0) {
      setLoadingFilter(false)
    }
  }, [categoriesList])

  // Loading is unset when stories is set after success request API
  useEffect(() => {
    if (storiesList.length > 0) {
      setLoadingStories(false)
    }
  }, [storiesList])

  return (
    <div className="gamelist mt-4 mx-8 h-auto md:mt-32 lg:w-8/12 lg:flex lg:flex-col lg:mx-auto">
      {showModal && (
        <Modal
          showModal={showModal}
          onClose={() => setModal(false)}
          storyId={storyId}
        />
      )}
      <h1 className="gamelist__title uppercase text-white text-2xl font-light text-center my-2 md:text-4xl md:text-left lg:self-start">
        Sélectionner un scénario
      </h1>
      <button
        name="button-display-filter"
        onClick={() => setDisplayFilter(!displayFilter)}
        className="gamelist__button bg-gray-200 py-2 w-full rounded-lg text-xl my-1 shadow-lg md:hidden"
      >
        Voir les filtres
      </button>
      <div className="gamelist__container md:flex md:my-4 lg:justify-between">
        <aside
          className={`gamelist__filter overflow-hidden ${asideFilterClassName} bg-gray-200 px-6 rounded-lg md:opacity-100 md:mr-6 md:w-48 md:px-2`}
        >
          <h2 className="gamelist__filter-title text-xl font-bold my-2 px-6 md:text-center md:px-0">
            Affiner les histoire
          </h2>
          <div className="gamelist__filter-button flex justify-center my-2">
            <button
              onClick={handleOnResetFilter}
              className="gamelist__filter-reset bg-blue-200 rounded-lg px-4 py-2 border border-black shadow-lg text-sm"
            >
              Réinitialiser les filtres
            </button>
          </div>
          <div className="filter__blog flex justify-around mb-4 md:flex-col md:items-center">
            {loadingFilter && (
              <Loading
                type="Oval"
                color="#5BC1FF"
                heightValue={50}
                widthValue={50}
              />
            )}
            {!loadingFilter && (
              <Filter
                title="Catégories"
                datas={categoriesList}
                setSelectedRadioValue={setSelectedRadioValue}
                selectedRadioValue={selectedRadioValue}
                fetchFilterRequest={fetchFilterRequest}
              />
            )}
            {!loadingFilter && (
              <Filter
                title="Difficultés"
                datas={difficulties}
                setSelectedRadioValue={setSelectedRadioValue}
                selectedRadioValue={selectedRadioValue}
                fetchFilterRequest={fetchFilterRequest}
              />
            )}
          </div>
        </aside>
        <section className="gameList__display my-4 md:my-0 md:flex md:justify-center md:w-10/12">
          <div className="gameList__display-container md:flex md:flex-col md:items-center">
            <Dropdown sortStories={sortStories} />
            {!loadingStories ? (
              <ul className="gamelist__list mt-8">
                {storiesList.map((story) => (
                  <Card key={story.id} {...story} handleModal={handleModal} />
                ))}
              </ul>
            ) : (
              <div className="home__loading-latest flex justify-center mt-4">
                <Loading
                  type="Bars"
                  color="#5BC1FF"
                  heightValue={50}
                  widthValue={50}
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default GameList
