import React from "react"
import { Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import "./styles.css"

const Logout = ({ isLogged, logout }) => <>{isLogged && <Redirect to="/" />}</>

Logout.propTypes = {
  isLogged: PropTypes.func.isRequired,
}

export default Logout
