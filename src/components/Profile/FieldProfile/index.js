import React from "react"
import PropTypes from "prop-types"
import "./styles.css"

const Field = ({ type, name, placeholder, inputValue, setInputValue }) => (
  <>
    <input
      className="field__input px-4 mb-2 h-12"
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  </>
)

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
}
export default Field
