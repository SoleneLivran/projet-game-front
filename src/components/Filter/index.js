import React from "react"
import PropTypes from "prop-types"
import FilterItem from "./FilterItem/index"

import "./styles.css"

const Filter = ({ title, datas }) => {
  return (
    <div className="filter">
      <h3 className="filter__title my-1">{title}</h3>
      <ul className="filter__list mx-4">
        {datas.map((item) => (
          <FilterItem
            key={item.id}
            name={item.name}
            id={item.name}
            value={item.name}
          />
        ))}
      </ul>
    </div>
  )
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  datas: PropTypes.array.isRequired,
}
export default Filter
