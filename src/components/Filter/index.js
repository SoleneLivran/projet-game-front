import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

const Filter = ({ title, datas, setSelectedRadioValue, selectedRadioValue }) => {
  return (
    <div className="filter">
      <h3 className="filter__title my-1">{title}</h3>
      <ul className="filter__list mx-2">
        {datas.map((item) => (
          <li className="filter__radio my-1">
            <input
              type="radio"
              name={item.name}
              id={item.id}
              value={item.value}
              onClick={() => setSelectedRadioValue(item.value)}
              checked={selectedRadioValue === item.value}
            />
            <label htmlFor="category1" className="mx-2">
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  datas: PropTypes.array.isRequired,
  setSelectedRadioValue: PropTypes.func.isRequired,
  selectedRadioValue: PropTypes.string.isRequired,
}
export default Filter
