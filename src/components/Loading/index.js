import React from "react"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./styles.css"

const Loading = () => (
  <div className="loader">
    <Loader type="Bars" color="#00BFFF" height={100} width={100} />
  </div>
)

export default Loading
