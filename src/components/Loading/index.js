import React from "react"
import PropTypes from "prop-types"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./styles.css"

const Loading = ({ type, color, heightValue, widthValue }) => (
  <div className="loader">
    <Loader type={type} color={color} height={heightValue} width={widthValue} />
  </div>
)

Loading.propTypes = {
  heightValue: PropTypes.number.isRequired,
  widthValue: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
export default Loading
