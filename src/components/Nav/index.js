import React from "react"
import "./Nav.css"
import { NavLink } from "react-router-dom"

const Nav = () => (
  <div className="nav bg-gray-900 h-full w-screen ">
    <ul className="uppercase py-16 text-gray-100 text-xl flex justify-evenly items-center font-bold">
      <NavLink activeClassName="nav__selected" to="/create" className="">
        Créer
      </NavLink>
      <NavLink activeClassName="nav__selected" to="/play">
        Jouer
      </NavLink>
      <NavLink to="/">
        <img
          src="/assets/img/logo.png"
          className="-my-10 transform duration-200 ease-in-out h-64 hover:scale-110 "
          alt=""
        />
      </NavLink>
      <NavLink activeClassName="nav__selected" to="/about">
        A propos
      </NavLink>
      <NavLink activeClassName="nav__selected" to="/contact">
        Contact
      </NavLink>
    </ul>
  </div>
)

export default Nav
