export const SET_AVATAR = "SET_AVATAR"
export const FETCH_USER = "FETCH_USER"
export const SET_USER = "SET_USER"

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
