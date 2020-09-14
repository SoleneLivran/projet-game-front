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

// action type for auth middleware
export const login = () => ({
  type: LOGIN,
})

// action type from auth middleware, got to auth reducer
export const saveUser = () => ({
  type: SAVE_USER,
})
