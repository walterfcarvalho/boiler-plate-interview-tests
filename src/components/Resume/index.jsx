import {Link} from 'react-router-dom'
import './Resume.css'
import infos from '../../data-questions.json' 

export const Resume = ({infoName, HideLinkBack = false}) => {

  return <div className='header'>
      
      { !HideLinkBack &&  <Link to="/"> Back to begin </Link>}

      <div className='line'>
        <strong> Title: </strong> {infos[infoName].title}
      </div>

      <div className='line'>
        <strong> Link: </strong> <a href={infos[infoName].link || " "} target='_blank'> {infos[infoName].link || " "} </a> 
      </div>

      <div className='line'>
        <strong> Description: </strong> {infos[infoName].description || " "}
      </div>

      <div className='line'>
        <strong> Github: </strong> 
        <a href="https://github.com/walterfcarvalho/interview-tests" target='_blank'> https://github.com/walterfcarvalho/interview-tests </a> 
      </div>

  </div>

} 