import { useState } from "react";
import { Link } from "react-router-dom"
import './Captcha.css'

const ONE =
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const TWO =
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const THREE =
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const FOUR =
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const FIVE =
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const SIX =
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"


const Captcha = () => {
  const [myNumber, setMyNumber] = useState(0) // useState(getNewNumber())

  function getNewNumber() {
    let x = Math.floor(Math.random() * 6) + 1
    console.log(x)
    return x
  }


  function setGuess(guessNumber) {
    console.log(guessNumber)

    if (guessNumber !== myNumber) {
      window.alert('Try again')
      return
    }

    setMyNumber(0)
  }


  return <div>
    <h1> <Link to="/" > return to begin </Link></h1>

    <div className='captcha-container'>



      {myNumber === 0 ?
        <div>
          <button onClick={() => { setMyNumber(getNewNumber) }} > Guess a number </button>
        </div>
        :
        <div>
          <p>click over number: {myNumber} </p>
          <p>
            <img src={ONE} onClick={() => setGuess(1)} alt="xx" />
            <img src={TWO} onClick={() => setGuess(2)} alt="xx" />
            <img src={THREE} onClick={() => setGuess(3)} alt="xx" />
          </p>
          <p>
            <img src={FOUR} onClick={() => setGuess(4)} alt="xx" />
            <img src={FIVE} onClick={() => setGuess(5)} alt="xx" />
            <img src={SIX} onClick={() => setGuess(6)} alt="xx" />
          </p>
        </div>}

    </div>

  </div>




}

export default Captcha