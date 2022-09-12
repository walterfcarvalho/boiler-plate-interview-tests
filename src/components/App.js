import React from 'react'
import { Link } from "react-router-dom"
import { Resume } from './Resume'

function App() {
  return <div>
    <Resume infoName={"App"} HideLinkBack={true} />
    <h1>
      <p> <Link to="/arbitrarilyjsobject" > 01 arbitrarily nested JS Object</Link> </p>
      <p> <Link to="/renderrobot" > 02 Render Robot </Link> </p>
      <p> <Link to="/listactivites" > 03 Expendable list of activities </Link> </p>
      <p> <Link to="/expandingladder" > 04 Expanding Ladder`s parts </Link> </p>
      <p> <Link to="/usecontext" > 05 User context </Link> </p>
      <p> <Link to="/multiplechoicequiz" > 08 Multiple choice quiz </Link> </p>
      <p> <Link to="/filteronlist" > 09 Search on a List </Link> </p>
      <p> <Link to="/mergesortpart1" > 10 Mergesort Part1 </Link> </p>
      <p> <Link to="/loginscreen" > 11 Login screen </Link> </p>
      <p> <Link to="/growshrinkbutton" > 13 GrowShrinkButton </Link> </p>
      <p> <Link to="/captcha" >  14 Captcha  </Link> </p>
      <p> <Link to="/buggybuttons" > 15 BuggyButtons </Link> </p>
      <p> <Link to="/simplelist" > 16 simplelist </Link> </p>
      <p> <Link to="/stackoperation" > 17 StackOperation </Link> </p>
      <p> <Link to="/formulario" > 17 Form validator </Link> </p>
      <p> <Link to="/cssanimation" > css animation </Link> </p>
    </h1>
  </div>
}

export default App
