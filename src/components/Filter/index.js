import React from "react"
import PropTypes from "prop-types"
import FilterItem from "./FilterItem/index"
import axios from "axios"
import "./styles.css"

const Filter = ({ title }) => {
  return (
    <div className="filter">
      <h3 className="filter__title my-1">{title}</h3>
      <ul className="filter__list mx-4">
        <FilterItem />
      </ul>
    </div>
  )
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Filter
