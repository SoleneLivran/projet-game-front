import React from "react"
import ReactDOM from "react-dom"
import "src/styles/index.css"
import App from "src/components/App"
import store from "src/store"
import { Provider } from "react-redux"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { DragDropContext } from "react-beautiful-dnd"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
