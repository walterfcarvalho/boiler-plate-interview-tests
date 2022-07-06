
// https://react-hook-form.com/get-started#Handleerrors

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import './RenderRobots.css'

const RenderRobots = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [robots, setRobots] = useState([])

  const onSubmit = data => {
    let aux = [...robots]
    aux.push({ url: "https://robohash.org/".concat(data.name), id: data.name })
    setRobots(aux)
    console.log(aux)
  }

  function removeItem(event) {
    let id = (event.target.id)

    let aux = [...robots]
    aux = aux.filter((robo) => robo.id !== (id))

    setRobots(aux)

    console.log(watch())
  }

  return <div>
    <Link to={"/"}>go back</Link>
    <form onSubmit={handleSubmit(onSubmit)} >

      <p>
        <input
          placeholder="Robot name..."
          {...register('name', {
            required: 'Robot name is required',
            maxLength: {
              value: 200,
              message: 'Max length is 2',
            },
          })}
        />
        {errors.firstName && errors.firstName.message}
        <input type="submit" value={"go"} />
      </p>

    </form>

      <div className="robos-container">
      <p className="robots-p">Robots</p>
      <div className="robos-list">
        {robots.map((robot, idx) => (
          <img key={idx} id={robot.id} className="robot-image" src={robot.url} onClick={removeItem} alt={`Url do robot:${robot.url}`} />
        ))}
      </div>
    </div>

  </div>
}

export default RenderRobots