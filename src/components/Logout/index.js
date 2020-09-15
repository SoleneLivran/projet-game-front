import React from "react"
import { Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import "./styles.css"

const Logout = ({ isLogged }) => <>{isLogged && <Redirect to="/login" />}</>

Logout.propTypes = {
  isLogged: PropTypes.func.isRequired,
}

export default Logout
