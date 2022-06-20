import React from 'react'
import { Link } from "react-router-dom"
import './App.css'

function App() {
  return <div>
    <h1>
      <p> <Link to="/simplelist" > simplelist </Link> </p>
      <p> <Link to="/growshrinkbutton" > GrowShrinkButton </Link> </p>
      <p> <Link to="/buggybuttons" > BuggyButtons </Link> </p>
      <p> <Link to="/stackoperation" > StackOperation </Link> </p>
    </h1>
  </div>
}

export default App
