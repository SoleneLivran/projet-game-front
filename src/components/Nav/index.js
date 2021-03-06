import React, { useState } from "react"
import PropTypes from "prop-types"
import "./styles.css"
import "./hamburger.css"
import { NavLink } from "react-router-dom"
import navDatas from "src/datas/nav"
import { fetchDatasUserPanel } from "src/selectors/nav"

const Nav = ({ isLogged, connectedId }) => {
  const [navIsOpen, setPanel] = useState(false)
  const [userNavIsOpen, setUserPanel] = useState(false)

  // datas depends of only when user is connected
  const navListUserData = fetchDatasUserPanel(isLogged, connectedId)

  // hamburger depends of isOpen state
  const hamburgerClassName =
    navIsOpen === false
      ? "hamburger hamburger--collapse"
      : "hamburger hamburger--collapse is-active"

  // Display nav when onClick event, only mobile
  const ulClassName =
    navIsOpen === false ? "opacity-0" : "opacity-100 nav__list--active"

  // Display nav user panel when onClick event, only mobile
  const ulUserClassName =
    userNavIsOpen === false ? "opacity-0" : "opacity-100 nav__list-user--active"

  // hamburger transition onClick event
  const handlePanel = () => {
    if (userNavIsOpen) {
      setUserPanel(false)
      setTimeout(() => {
        setPanel(!navIsOpen)
      }, 500)
    } else {
      setPanel(!navIsOpen)
    }
  }
  const handleUserPanel = () => {
    if (navIsOpen) {
      setPanel(false)
      setTimeout(() => {
        setUserPanel(!userNavIsOpen)
      }, 500)
    } else {
      setUserPanel(!userNavIsOpen)
    }
  }

  return (
    <div className="nav bg-gray-900 shadow-lg  h-auto relative py-2">
      <div className="flex pl-5 pr-12 justify-between items-center">
        <button
          onClick={() => handlePanel()}
          className={`${hamburgerClassName}`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div
          onClick={() => handleUserPanel()}
          className="nav__user h-20 w-20 rounded-full bg-contain bg-center transform cursor-pointer hover:scale-110 sm:hidden"
        />
      </div>
      <ul
        className={`nav__list overflow-hidden ${ulClassName} sm:static sm:opacity-100 sm:h-auto uppercase text-center sm:py-5 text-gray-100 text-xl flex flex-col sm:flex-row justify-around sm:items-center font-bold md:justify-around`}
      >
        {/* Display all button in nav, except home */}
        {navDatas.map((item, key) => (
          <NavLink
            key={key}
            activeClassName="nav__selected"
            to={item.route}
            exact
            className={`order-${item.order} ${
              item.route === "/" ? "md:hidden" : ""
            } p-3 duration-150 ease-in-out sm:p-5 hover:text-gray-700 md:w-48 md:mx-2`}
          >
            {item.name}
          </NavLink>
        ))}

        {/* display the home button with a img, always in center, depend of the nav length */}
        <NavLink to="/" className={`md:order-${Math.ceil(navDatas.length / 2)}`}>
          <img
            src="/assets/img/front_logo.png"
            className="nav__logo absolute h-64 hidden md:block mx-auto"
            alt=""
          />
        </NavLink>
      </ul>
      <ul
        className={`nav__list-user ${ulUserClassName} overflow-hidden uppercase text-center text-gray-100 text-xl flex flex-col justify-around font-bold sm:hidden`}
      >
        {/* map the user nav, depends of the status of isLogged */}
        {navListUserData.map((navUser, key) => (
          <NavLink
            key={key}
            activeClassName="nav__selected"
            className="p-3 sm:p-5"
            to={navUser.path}
          >
            {navUser.name}
          </NavLink>
        ))}
      </ul>
    </div>
  )
}

Nav.propTypes = {
  isLogged: PropTypes.bool.isRequired,
}

export default Nav
