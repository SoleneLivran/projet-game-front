import { combineReducers } from "redux"
import app from './app.js'

// combineReducer permet d'aggréger plusieurs sous-reducers
// en un reducer global : on parle de rootReducer
export default combineReducers({
  app
})
