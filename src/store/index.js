// == Import : npm
import { createStore, compose, applyMiddleware } from "redux"

// == Import : local
import rootReducer from "src/reducers"
import app from "src/middleware/app"
import logMiddleware from "../middleware/logMiddleware"

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancers = composeEnhancers(applyMiddleware(logMiddleware, app))

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers
)

// == Export
export default store
