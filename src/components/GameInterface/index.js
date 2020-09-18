import React, { useEffect } from "react"
import "./styles.css"

const GameInterface = ({ hideNav }) => {
  useEffect(hideNav, [])
  return <div className="game-interface">GameInterface</div>
}

export default GameInterface
