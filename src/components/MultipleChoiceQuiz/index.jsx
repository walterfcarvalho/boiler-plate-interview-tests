import { useState } from 'react'
import { Resume } from '../Resume'
import lst from './questions.json'
import styled from 'styled-components'

const Paragraph = styled.p`
  margin:5px;
  background-color: #f1f1f1;

  &:hover {
    background-color: #c1c1c1;
  }
`
const P = styled.p`
  margin:5px;
  background-color: #f1f1f1;
`
const Body = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
`

const Question = ({ question, handleAnswer }) => {

  return <>
    <p>{question.question}</p>

    {
      question.answers.map((answer, idx) => (
        <Paragraph key={idx} onClick={() => handleAnswer(idx)}  > {answer} </Paragraph>
      ))
    }
  </>
}

const MultipleChoiceQuiz = () => {
  const [idxQuestion, setQuesetIdxQuestion] = useState(0)
  const [list] = useState(lst.list)
  const [scored, setScored] = useState(0)

  function handleAnswer(response) {
    console.log('handleAnswer', response)


    if (response === list[idxQuestion].correct) {
      let contador = scored + 1
      setScored(contador)
    }

    let idx = idxQuestion + 1
    setQuesetIdxQuestion(idx)

  }

  return <>
    <Resume infoName="MultipleChoiceQuiz"></Resume>

    <Body>

      {(idxQuestion <= list.length - 1) &&
        <p>Question {idxQuestion + 1} of {list.length}</p>}
      {

      (idxQuestion <= list.length - 1)
      ? <Question
            question={list[idxQuestion]}
            handleAnswer={handleAnswer}
          />
      : <P> right answers: {scored * 100 / list.length}% </P>
      }

    </Body>
  </>
}

export default MultipleChoiceQuiz
