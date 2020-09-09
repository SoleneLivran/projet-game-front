import React, { useState } from "react"
import "./styles.css"
import "./hamburger.css"
import { NavLink } from "react-router-dom"
import navDatas from "src/datas/nav"

const Nav = () => {
  const [isOpen, setPanel] = useState(false)

  // hamburger depends of isOpen state
  const hamburgerClassName =
    isOpen === false
      ? "hamburger hamburger--collapse"
      : "hamburger hamburger--collapse is-active"
  // Display nav when onClick event, only mobile
  const ulClassName = isOpen === false ? "opacity-0" : "opacity-100 nav__list--active"

  // hamburger transition onClick event
  const handlePanel = () => setPanel(!isOpen)

  return (
    <div className="nav bg-gray-900 h-full w-screen relative">
      <button
        onClick={() => handlePanel()}
        className={`${hamburgerClassName}`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <ul
        className={`nav__list overflow-hidden ${ulClassName} sm:static sm:opacity-100 sm:h-auto uppercase sm:py-5 sm:py-16 text-gray-100 text-xl flex flex-col sm:flex-row justify-between sm:items-center font-bold`}
      >
        {/* Display all button in nav, except home */}
        {navDatas.map((item, key) => (
          <NavLink
            key={key}
            activeClassName="nav__selected"
            to={item.route}
            exact
            className={`order-${item.order} ${
              item.route == "/" ? "md:hidden" : ""
            } p-3 sm:p-5`}
          >
            {item.name}
          </NavLink>
        ))}

        {/* display the home button with a img, always in center, depend of the nav length */}
        <NavLink to="/" className={`order-${Math.ceil(navDatas.length / 2)}`}>
          <img
            src="/assets/img/logo.png"
            className="nav__logo -my-10 transform duration-200 ease-in-out h-64 hover:scale-110 hidden md:block"
            alt=""
          />
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav
