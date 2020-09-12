export const CHANGE_INPUT = "CHANGE_INPUT"
export const LOGIN = "LOGIN"

export const changeValue = (value, key) => ({
  type: CHANGE_INPUT,
  value,
  // key => ownProps.name
  key,
})

export const login = () => ({
  type: LOGIN,
})
