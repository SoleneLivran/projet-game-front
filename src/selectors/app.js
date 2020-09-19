import lodash from "lodash"

export const displayNav = (location, setShowNav) =>
  lodash.startsWith(location, "/letsplay") ? setShowNav(true) : setShowNav(false)
