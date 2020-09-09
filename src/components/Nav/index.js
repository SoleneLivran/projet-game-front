import React from "react"
import "./Nav.css"
import { NavLink } from "react-router-dom"
import navDatas from "src/datas/nav"

const Nav = () => (
  <div className="nav bg-gray-900 h-full w-screen ">
    <ul className="uppercase py-16 text-gray-100 text-xl flex justify-evenly items-center font-bold">
      {navDatas.map((item) => (
        <NavLink
          activeClassName="nav__selected"
          to={item.route}
          exact
          className={`order-${item.order} p-5`}
        >
          {item.name}
        </NavLink>
      ))}
      <NavLink to="/" className={`order-${Math.ceil(navDatas.length / 2)}`}>
        <img
          src="/assets/img/logo.png"
          className="nav__logo -my-10 transform duration-200 ease-in-out h-64 hover:scale-110 "
          alt=""
        />
      </NavLink>
    </ul>
  </div>
)

export default Nav
