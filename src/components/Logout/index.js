import React, { useEffect } from "react"
import { Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import "./styles.css"

const Logout = ({ isLogged, logout }) => {
  useEffect(() => {
    if (isLogged === true) {
      localStorage.removeItem("user")
      logout()
    }
  }, [])
  return (
    <>
      <Redirect to="/" />
    </>
  )
}

Logout.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
}

export default Logout
