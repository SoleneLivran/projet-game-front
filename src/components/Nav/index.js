import React from "react"
import "./Nav.css"
import { NavLink } from "react-router-dom"
import navDatas from "src/datas/nav"

const Nav = () => (
  <div className="nav bg-gray-900 h-full w-screen ">
    <ul className="uppercase py-5 sm:py-16 text-gray-100 text-xl flex flex-col sm:flex-row justify-evenly items-center font-bold">
      {/* Display all button in nav, except home */}
      {navDatas.map((item) => (
        <NavLink
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

export default Nav
