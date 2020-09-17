export const SET_AVATAR = "SET_AVATAR"
export const FETCH_USER = "FETCH_USER"

export const setAvatar = (img) => ({
  type: SET_AVATAR,
  imgFile: img,
})

export const fetchUser = () => ({
  type: FETCH_USER,
})
