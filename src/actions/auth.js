import { SAVE_POPULAR_STORIES } from "./app"

export const CHANGE_INPUT = "CHANGE_INPUT"
export const LOGIN = "LOGIN"
export const SAVE_USER = "SAVE_USER"

export const changeValue = (value, key) => ({
  type: CHANGE_INPUT,
  value,
  // key => ownProps.name
  key,
})

export const login = () => ({
  type: LOGIN,
})

export const saveUser = () => ({
  type: SAVE_USER,
})
