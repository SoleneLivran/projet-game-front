import React from "react"
import "./Nav.css"

const Nav = () => (
  <div className="Nav bg-gray-900 h-full w-screen ">
    <ul className="uppercase py-16 text-gray-100 text-xl flex justify-evenly items-center font-bold">
      <li className="">Créer</li>
      <li>Jouer</li>
      <img
        src="/assets/img/logo.png"
        className="-my-10 transform duration-200 ease-in-out h-64 hover:scale-110 "
        alt=""
      />
      <li>A propos</li>
      <li>Contact</li>
    </ul>
  </div>
)

export default Nav
