import { useState } from 'react'
import { Resume } from '../Resume'
import styled from 'styled-components'
import LADDER_IMAGE from '../../images/ladderPart.png'

const LadderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15;
`
const LadderPart = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
`
const Img = styled.img`
  width: ${(props) => props.size};
`

const BIG = '140px'
const LITTLE = '100px'

const ExpandingLadder = () => {
  const [ladder, setLadder] = useState(setQt)

  function setSize(id, size) {
    let aux = ladder

    ladder.map((part, idx) => {
      if (part.id <= id) {
        aux[idx].size = size
      }
    })
    setLadder([...aux])
  }

  function setQt() {
    return new Array(5)
      .fill(null)
      .map((it, idx) => ({ id: idx, size: LITTLE }))
      .sort((a, b) => a.id < b.id ? 1 : -1)
  }

  return <>
    <Resume infoName={"ExpandingLadder"} />
    <LadderWrap>
      {ladder.map((ladderPart) => (
        <LadderPart key={ladderPart.id} >
          {ladderPart.id}
          <Img
            size={ladderPart.size}

            src={LADDER_IMAGE}
            onMouseLeave={() => setSize(ladderPart.id, LITTLE)}
            onMouseOver={() => setSize(ladderPart.id, BIG)}
          />
        </LadderPart>
      ))}
    </LadderWrap>

  </>
}

export default ExpandingLadder
