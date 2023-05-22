import { useState } from 'react'
import Tile from '../Tile'
import './Border.css'

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const Border = () => {
  const [score, setScore] = useState({ X: 0, O: 0, draw:0, match: 1 })
  const [moves, setMoves] = useState(Array(9).fill(''))
  const [isPlayerOne, setIsPlayerOne] = useState(true)
  const [isGame, setIsGame] = useState(true)

  function tileClick(event) {
    let id = event.target.id

    if ( !id || moves[id] || !isGame ) {
      return
    }

    let aux = [...moves]
    aux[id] = isPlayerOne ? "X" : "O"
    setMoves([...aux])

    checkWinner(aux)

    setIsPlayerOne(!isPlayerOne)
  }

  function newMatch(){
    setMoves(Array(9).fill(''))

    let aux = score
    aux.match++
    setScore(aux)
    setIsGame(true)
  }


  function checkWinner(aux) {
    let player = isPlayerOne ? "X" : "O"

    win.forEach(hand => {
      if (aux[hand[0]] === player && aux[hand[1]] === player && aux[hand[2]] === player) {
        console.log('winner', player)

        window.alert(`${player} win !!`)

        setIsGame(false)

        let aux = score
        aux[player]++
        setScore(aux)
      }
    })

    if ( aux.filter(move => move.length === 0 ).length === 0  ) {
      window.alert(`${player} win !!`)
    }
  }


  return <div className="tictactoe-board">
    Match:{score.match} 
    <p>Score: X:{score.X} O:{score.O} Draw:{score.draw} </p>

    <div className='tictactoe-tiles'>
      {moves.map((move, idx) => (
          <Tile 
            key={idx} 
            idx={idx} 
            value={move} 
            handleclick={tileClick} 
          />
      )
      )}
    </div>
    
    <button onClick={newMatch}> NewMatch  </button>
 
  </div>
}

export default Border