import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

const Filter = ({
  title,
  datas,
  setSelectedRadioValue,
  selectedRadioValue,
  fetchFilterRequest,
}) => {
  const handleRequestValue = (filterId) => {
    setSelectedRadioValue(filterId)
    fetchFilterRequest(filterId)
  }
  return (
    <div className="filter">
      <h3 className="filter__title my-1">{title}</h3>
      <ul className="filter__list mx-2">
        <li className="filter__radio">
          <label htmlFor={`default-${title}`} className="my-2 cursor-pointer">
            <input
              type="radio"
              name={`default-${title}`}
              id={`default-${title}`}
              value={`default-${title}`}
              onChange={() => handleRequestValue(0)}
              checked={selectedRadioValue === 0}
              className="cursor-pointer mx-2"
            />
            Toutes
          </label>
        </li>
        {datas.map((item) => (
          <li className="filter__radio" key={item.id}>
            <label htmlFor={item.name} className="my-2 cursor-pointer">
              <input
                type="radio"
                name={item.name}
                id={item.name}
                value={item.name}
                onChange={() => handleRequestValue(item.id)}
                checked={selectedRadioValue === item.id}
                className="cursor-pointer mx-2"
              />
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
  selectedRadioValue: PropTypes.number.isRequired,
  fetchFilterRequest: PropTypes.func.isRequired,
}
export default Filter
