export const CHANGE_USER_INPUT = "CHANGE_USER_INPUT"
export const USER_EDIT = "USER_EDIT"
export const CLEAR_EDIT = "CLEAR_EDIT"
export const SET_AVATAR = "SET_AVATAR"
export const FETCH_USER = "FETCH_USER"
export const SET_USER = "SET_USER"

export const changeUserValue = (value, key) => ({
  type: CHANGE_USER_INPUT,
  value,
  // key => ownProps.name
  key,
})

export const userEdit = () => ({
  type: USER_EDIT,
})

export const clearEdit = () => ({
  type: CLEAR_EDIT,
})

export const setAvatar = (img) => ({
  type: SET_AVATAR,
  imgFile: img,
})

export const fetchUser = () => ({
  type: FETCH_USER,
})

export const setUser = (userData) => ({
  type: SET_USER,
  name: userData.name,
  mail: userData.mail,
  avatar: userData.mail,
})
