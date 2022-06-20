import { useState } from 'react'
import { Link } from "react-router-dom"
import './StackOperation.css'


const StackOperation = () => {
  const [opers, setOpers] = useState([])
  const [result, setResult] = useState(0)

  function addOperation(oper) {
    let aux = [...opers]
    aux.push(oper)
    setOpers(aux)
  }



  function calculate(event) {
    event.preventDefault()

    let ini = parseFloat(event.target.elements.inicialValue.value)
    let tot = ini

    opers.forEach(op => {
      tot = (op.op(tot))
    })
    
    setResult("inicial Value: " + ini + " final value: " + tot )
  }


  return (<div className="container-stack">
    <h1> <Link to="/" > return to begin </Link></h1>

    <div className="buttons"> 
      <div classname="operations">
        <button onClick={() => { addOperation({ name: "half", op: (a) => a / 2 }) }}  > half  </button>
        <button onClick={() => { addOperation({ name: "double", op: (a) => a * 2 }) }}  > double  </button>
        <button onClick={() => { addOperation({ name: "increment", op: (a) => a + 1 }) }}  > increment  </button>
        <button onClick={() => { addOperation({ name: "decrement", op: (a) => a - 1 }) }}  > decrement  </button>
      </div>

      <div className="reset-button">
        <button onClick={()=>{setOpers([]) ; setResult(0)  }} > clear  </button>
      </div>  

    </div>


    <div className="operations-list">

      {opers.map((ope, idx) => (
        <p key={idx}>{ope.name}</p>
      ))}
    </div>


    <form onSubmit={calculate}>
      <input
        id="inicialValue"
        placeholder='InicialValue'
      />
      <input type="submit" value="go!" />
    </form>


        <p>{result}</p>


  </div>
  )
}

export default StackOperation