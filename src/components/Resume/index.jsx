import {Link} from 'react-router-dom'
import './Resume.css'
import infos from '../../data-questions.json' 

export const Resume = ({infoName}) => {

  return <div className='header'>
      
      < Link to="/"> Back to begin </Link>

      <div className='line'>
        <strong> Title: </strong> {infos[infoName].title}
      </div>

      <div className='line'>
        <strong> Link: </strong> <a href={infos[infoName].link || " "} target='_blank'> {infos[infoName].link || " "} </a> 
      </div>

      <div className='line'>
        <strong> Description: </strong> {infos[infoName].description || " "}
      </div>

  </div>

} 