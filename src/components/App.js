import React from 'react'
import { Link } from "react-router-dom"
import './App.css'

function App() {
  return <div>
    <h1>
      <p> <Link to="/growshrinkbutton" > 13 GrowShrinkButton </Link> </p>
      <p> <Link to="/captcha" >  14 Captcha  </Link> </p>
      <p> <Link to="/buggybuttons" > 15 BuggyButtons </Link> </p>
      <p> <Link to="/simplelist" > 16 simplelist </Link> </p>
      <p> <Link to="/stackoperation" > 17 StackOperation </Link> </p>
      <p> <Link to="/form" > 17 Form validator </Link> </p>
    </h1>
  </div>
}

export default App
