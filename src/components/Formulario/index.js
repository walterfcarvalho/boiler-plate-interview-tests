
// https://react-hook-form.com/get-started#Handleerrors

import React from "react"
import { useForm } from "react-hook-form"

const Formulario = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = data => console.log(data)

  console.log(watch())

  return <div>
    <form onSubmit={handleSubmit(onSubmit)} >

      <p>
        <label htmlFor="firstName">field required, max length</label>
        <input
          placeholder="Bill"
          {...register('firstName', {
            required: 'this is a required',
            maxLength: {
              value: 200,
              message: 'Max length is 2',
            },
          })}
        />
        {errors.firstName && errors.firstName.message}
        <br />
      </p>

      <p>
        <label htmlFor="range">age</label>
        <input
          placeholder="18"
          {...register('age', {

            required: 'age is required',
            min: {
              value: 18,
              message: 'min age is 18',
            },
            max: {
              value: 99,
              message: 'max age is 99',
            }
          })}
        />
        {errors.firstName && errors.age.message}
        <br />
      </p>

      <p>
        <select {...register("gender", { required: 'choose a gender' })}>
          <option value=""></option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        {errors.gender && errors.gender.message}
        <br />
      </p>


      <p>
        <label htmlFor="cpf">cpf</label>
        <input {...register("cpf", { required: 'informe o cpf',
          pattern: { value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, message: "nao é cpf" }
          
        })} />

        {errors.cpf && errors.cpf.message}
        <br />


      </p>

      <input type="submit" value={"go"} />


    </form>
  </div>
}

export default Formulario