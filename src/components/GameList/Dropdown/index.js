import React, { useState } from "react"
import PropTypes from "prop-types"

const Dropdown = ({ sortStories }) => {
  const [selectedOption, setSelectedOption] = useState("name")
  const [activeCheckbox, setActiveCheckbox] = useState(false)

  const handleChangeSelect = (e) => {
    setSelectedOption(e.target.value)
    sortStories(e.target.value, activeCheckbox)
  }
  const handleChangeCheckbox = (e) => {
    setActiveCheckbox(!activeCheckbox)
    sortStories(selectedOption, !activeCheckbox)
  }

  return (
    <div className="dropdown bg-gray-200 rounded-lg p-4 flex flex-col md:self-start">
      <div className="dropdown__list flex items-center my-1">
        <label htmlFor="dropdown" className="dropdown__label">
          Afficher par:
        </label>
        <select
          name="filter-by"
          id="filter-by"
          className="dropdown__select bg-transparent border rounded-sm border-black w-7/12 mx-auto py-1"
          value={selectedOption}
          onChange={handleChangeSelect}
        >
          <option value="name">Nom (défaut)</option>
          <option value="date">Date de publication</option>
          <option value="difficulty">Difficulté</option>
          <option value="category">Categorie</option>
          <option value="rating">Populaire</option>
        </select>
      </div>
      <div className="dropdown__inverse flex items-center my-1">
        <label className="dropdown__label pr-2" htmlFor="checkbox-reverse">
          Inverser l'ordre
        </label>
        <input
          onChange={handleChangeCheckbox}
          type="checkbox"
          name="reverse"
          id="reverse"
        />
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  sortStories: PropTypes.func.isRequired,
}
export default Dropdown
