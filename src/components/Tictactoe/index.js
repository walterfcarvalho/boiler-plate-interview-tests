
import './ticTacApp.css';
import Border from './border';
import { Resume } from 'components/Resume';

function App() {
  
  return <div>
    <Resume infoName={"tictactoe"}/>
    <div className='tictactoecontainer'>
      <Border />
    </div>

  </div>
}

export default App;
