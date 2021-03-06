import React, { useEffect } from "react"
import PropTypes from "prop-types"
import "./styles.css"

const Field = ({
  type,
  name,
  placeholder,
  inputValue,
  setInputValue,
  clearInput,
  inputRef,
}) => {
  useEffect(() => {
    return () => {
      clearInput()
    }
  }, [clearInput])
  return (
    <>
      <input
        className="field__input px-4 mb-2 h-12 border-4 border-white focus:border-black"
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
      />
    </>
  )
}

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
}
export default Field
