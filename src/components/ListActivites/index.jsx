import { Resume } from '../Resume'
import { useState } from 'react'
import styled from 'styled-components'
import acts from './activities.json'

const Head = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
`
const ActHead = styled.ul`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 5px;
  margin: 5px;
  background-color: #c1c1c1;
  `
const P = styled.li`
  display:flex;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 5px;
  margin: 1px;
`
const Button = styled.button`
  width: 10%;
`
const Span = styled.span`
  width: 70%;
`

const Activity = ({act}) =>{
  const [showDetail, setShowDetail] = useState(false)
  return <>
    <ActHead>
        <Button onClick={() => setShowDetail(!showDetail)}  > { !showDetail ? "show" : "hide"} </Button>
        <ul key={act.key}>  {act.activity} </ul>   
    </ActHead>

    {
      showDetail && <>
        <P>type: {act.type}</P>
        <P>participants: {act.participants}</P>
        <P>price: {act.price}</P>
        <P>key: {act.key}</P>
        <P>accessibility: {act.accessibility}</P>
      </>
    }
  </>
}

const ListActivites = () => {
  const [activities, setActivities] = useState([])

  function generateActivity(){
    // let url = 
    // process.env.NODE_ENV === 'development'
    // ? 'http://www.boredapi.com/api/activity'
    // : 'https://www.boredapi.com/api/activity'

    // console.log(activities)

    // fetch(url, {method:'GET'})
    // .then(response => response.json())
    // .then(data => setActivities([...activities, data]))

    /*
      BoredAPI has problem with SSL that doesn't allow to get data using https. So I got some data and save on a JSON file
      to use on this example. ;)
    */

    let idx  = Math.floor(Math.random() * acts.activities.length-1) + 1

    console.log(acts.activities[idx])

    setActivities([...activities, acts.activities[idx]])
  }

  return <>
    <Resume infoName={"ListActivites"}/>

    <Head>
      <button onClick={generateActivity}> Generate activity</button>
    </Head>

    {
      activities.map( (act, idx) => <div key={idx} > <Activity  act={act}/> </div>   )
    }
  </>
}

export default ListActivites
