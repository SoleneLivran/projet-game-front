// == Import : npm
import { createStore, compose, applyMiddleware } from "redux"

// == Import : local
import rootReducer from "src/reducers"
import home from "src/middleware/home"
import auth from "src/middleware/auth"
import logMiddleware from "../middleware/logMiddleware"

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancers = composeEnhancers(applyMiddleware(logMiddleware, home, auth))

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers
)

// == Export
export default store
