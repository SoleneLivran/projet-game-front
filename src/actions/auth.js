export const CHANGE_INPUT = "CHANGE_INPUT"
export const LOGIN = "LOGIN"
export const SIGNUP = "SIGNUP"
export const LOGOUT = "LOGOUT"
export const SAVE_USER = "SAVE_USER"
export const SAVE_NEW_USER = "SAVE_NEW_USER"
export const CHECK_IS_LOGGED = "CHECK_IS_LOGGED"

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

// action type for auth middleware
export const signup = () => ({
  type: SIGNUP,
})

export const logout = () => ({
  type: LOGOUT,
})

// action type from auth middleware, got to auth reducer
export const saveUser = (userToken) => ({
  type: SAVE_USER,
  username: userToken.username,
})

// action type from auth middleware, got to auth reducer
export const saveNewUser = () => ({
  type: SAVE_NEW_USER,
})

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
})
