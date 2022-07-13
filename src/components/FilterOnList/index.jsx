
import { Resume } from '../Resume'
import { useEffect, useState } from 'react'
import styled from 'styled-components'


export const DivBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DivFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`



const FilterOnList = () => {

  const [users, setUsers] = useState([])
  const [strFilter, setStrFilter] = useState('')

  useEffect(() => {
    console.log(`timeStamp-> ${new Date().getTime()}`)
    getDataFromAPI()
  }, [])

  function getDataFromAPI() {
    const getConf = {
      method: 'GET',
    }

    fetch('https://randomuser.me/api?results=100', getConf)
      .then(response => response.json())
      .then(result => {
        const orderList = result.results.sort( (a,b) => a.name.first > b.name.first ? 1 : -1)
        setUsers(orderList)
      })
  }

  return <>
    <Resume infoName={"FilterOnList"} />

    <DivBody>
      <DivFilter>
        <label htmlFor="">Filter: </label>
        <input id ="text" type="text" onKeyUp={(event) => setStrFilter(event.target.value)} />
      </DivFilter>

      {
        users.filter(x => x.name.first.slice(0, strFilter.length).toUpperCase() === strFilter.toUpperCase()).map(user => (
          <p> {user.name.first} </p>
        ))
      }

    </DivBody>



  </>

}
export default FilterOnList