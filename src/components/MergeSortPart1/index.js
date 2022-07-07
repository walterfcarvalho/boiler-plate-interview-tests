import React from "react"
import { useForm } from "react-hook-form"
import { useState } from 'react'
import './MergeSortPart1.css'

import { Resume } from '../Resume'

const ShowList = ({ subList }) => {
  const divider = Math.floor(subList.length / 2)
  const part1 = subList.slice(0, divider)
  const part2 = subList.slice(divider)

  return <div>
    <p> {`[${subList.toString()}]`}</p>

    {subList.length > 1 && (
      <div className='row'>
        <div className='col'>
          <ShowList subList={part1} />
        </div>
        <div className='col'>
          <ShowList subList={part2} />
        </div>
      </div>
    )}
  </div>

}

const MergeSortPart1 = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [list, setList] = useState([])

  const onSubmmit = (data) => {

    setList(
      Array.from({length:parseInt(data.quant)}, ()=>   Math.floor( Math.random(10) * 10)  )
    )
    
  
  }

  return <div>
    <Resume infoName={"MergeSortPart1"} />

    <form onSubmit={handleSubmit(onSubmmit)}>
      <p>
        <label htmlFor="firstName">Quantity of itens to generate (1-20):</label>
        <input
          placeholder="10"
          {...register('quant', {
            required: 'this is a required',
            max: {
              value: 99,
              message: 'Max value is 99',
            },
            min: {
              value: 1,
              message: "Min min value is 1"
            }
          })}
        />
        {errors.quant && errors.quant.message}
        <br />
      </p>

      <input type="submit" value={"go"} />

    </form>

    <ShowList subList={list} />
  </div>

}

export default MergeSortPart1
