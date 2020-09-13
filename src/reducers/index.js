import { combineReducers } from "redux"
import home from './home.js'

// combineReducer permet d'aggréger plusieurs sous-reducers
// en un reducer global : on parle de rootReducer
export default combineReducers({
  home
})
