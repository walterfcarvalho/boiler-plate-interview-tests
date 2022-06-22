import React, { useState } from 'react'
import icon from '../images/delete-16.ico'
import { Link } from "react-router-dom"
import './SimpleList.css'

const SimpleList = () => {
  const [lista, setlista] = useState(["item0", "item1", "item2", "item3"])

  function removeFromList(event) {
    const elId = event.target.id

    let listaF = lista.filter((item, id) => id !== parseInt(elId))

    setlista(
      listaF
    )
  }
  

  function addIntoList(event) {
    event.preventDefault()

    let newvalue = event.target.elements.newvalue.value

    let newLista = [...lista]    

    newLista.push(newvalue)

    setlista(newLista)

    event.target.reset()
  }


  return <div>
    <h1> <Link to = "/" > return to begin </Link></h1>

    <form onSubmit={addIntoList}>
      <input 
        type="text"
        placeholder="New value"
        autoFocus
        defaultValue=""
        id="newvalue"
      >
      </input>
      <input type="submit" value="Add" />
    </form>

    {lista.map((item, index) => (
      <div className="itemlist" key={index}>
        <p className= "itemlist-item">{item}</p>
        <img className= "itemlist-item" id={`${index}`} src={icon} onClick={removeFromList} alt="icon-bin"/>
      </div>
    ))}

  </div>
}


export default SimpleList