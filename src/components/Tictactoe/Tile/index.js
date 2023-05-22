import './Tile.css'
import X from '../images/X.png'
import O from '../images/O.png'

const Tile = ({idx, value, handleclick}) => {

  return <div key={idx} id={idx} className="tictactoe-tile" onClick={handleclick}>

{    value ?
      <img className='tictactoe-img' src={value==="X" ? X : O } />
    : " "
}    
  </div>
}

export default Tile