// == Import : npm
import { createStore, compose, applyMiddleware } from "redux"

// == Import : local
import rootReducer from "src/reducers"
import home from "src/middleware/home"
import auth from "src/middleware/auth"
import user from "src/middleware/user"
import gameinterface from "src/middleware/gameinterface"
// import logMiddleware from "../middleware/logMiddleware"

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancers = composeEnhancers(applyMiddleware(home, auth, user, gameinterface))

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers
)

// == Export
export default store
