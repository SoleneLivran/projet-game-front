import React from "react"
import PropTypes from "prop-types"

const FilterItem = ({ name, id, value }) => (
  <li className="filter__radio my-1">
    <input type="radio" name={name} id={id} value={value} />
    <label htmlFor="category1" className="mx-2">
      {name}
    </label>
  </li>
)

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
export default FilterItem
