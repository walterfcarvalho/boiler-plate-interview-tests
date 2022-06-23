import './CssAnimation.css'
import X from '../../images/X.png'


const CssAnimation = () => {


  function setclass(e){
    let cardBase = 'card'
    let classes = e.target.className

    if ( classes.includes("animation1")  ){
      e.target.className = cardBase + " animation2"
    } else {
      e.target.className = cardBase + " animation1"
    }

    console.log(e.target.className)
  }


  return <div>

    <div id="falling-card-parent">
      <div id="falling-card"></div>
    </div>

    <div>

      <img className='card' src={X} onClick={setclass}/>

    </div>


  </div>





}
export default CssAnimation