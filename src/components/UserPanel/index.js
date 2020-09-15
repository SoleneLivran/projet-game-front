import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./styles.css"
import { fetchDatasUserPanel } from "src/selectors/nav"

const UserPanel = ({ isLogged }) => {
  // datas depends of only when user is connected
  const navListUserData = fetchDatasUserPanel(isLogged)

  return (
    <div className="user-panel h-24 w-full bg-gray-900 text-white flex items-center justify-between rounded-l-full md:flex-col md:rounded-lg md:relative md:justify-center md:text-center">
      <div className="user-panel__img h-24 w-24 rounded-full shadow-lg bg-contain bg-center md:absolute md:h-48 md:w-48 md:bg-cover" />
      <p className="user-panel__content w-48 ml-6 mr-auto text-xl font-bold md:mt-16 md:mr-0 md:ml-0 md:mb-6">
        Bienvenue, <br /> jeune aventurier.
      </p>
      <div className="user-panel__buttons mr-auto text-xl md:mr-0 md:mt-2 md:flex md:flex-col xl:flex-row xl:justify-evenly xl:w-full xl:h-16 ">
        {navListUserData.map((buttonUser) => (
          <Link to={buttonUser.path}>
            <button
              type="button"
              className="bg-white ease-in-out duration-75 hover:bg-blue-900 hover:text-white text-gray-900 font-bold py-2 px-4 rounded mx-2 md:mx-0 md:mb-2 xl:mb-0 xl:px-8 capitalize"
            >
              {buttonUser.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

UserPanel.propTypes = {
  isLogged: PropTypes.bool.isRequired,
}
export default UserPanel
