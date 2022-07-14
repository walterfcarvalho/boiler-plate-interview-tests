import jsonFile from './data.json'
import styled from 'styled-components'
import { Resume } from '../Resume'

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px 10px;
`
const Obj = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
`


const ArbitrarilyJsObject = () => {

  return <>
    <Resume infoName={"ArbitrarilyJsObject"} ></Resume> 
    
    <TheComponent theData={jsonFile.data} />
  </>

}


const TheComponent = ({ theData }) => {

  return <>
    { 
      Object.keys(theData).map((item, index) => (
        typeof (theData[item]) === 'string'
          ? <Item> <strong> &#123; {item}: </strong> {theData[item]} &#125; </Item>
          : <Obj> &#123;  <strong>{item}: </strong> <TheComponent theData={theData[item] }  />  &#125; </Obj>
      )    
    )}
  </>

}

export default ArbitrarilyJsObject
