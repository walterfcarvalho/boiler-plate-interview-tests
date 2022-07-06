import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import './loginscreen.css'

export const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// background-color: #ffaabb; // ${ ({theme}) => theme.body};
box-shadow: 2px 2px 2px 2px black;
width: 100%;
border-radius: 10px;
padding: 10px;

@media (max-width: 800px) {
  width: 95%;
  margin: 5px;
}
`

export const Input = styled.input`
  margin:5px;
`


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginScreen = () => {

  const [logins, setLogins] = useState([{login:"login", password:"password"}])
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  
  const onSubmit = data => { 
  
    if (data.login.length < 6 || data.password.length < 6) {
      window.alert('login and password should have more than 6 characters')
      return
    }

    const loginMatched = logins.filter(login => login.login === data.login )

    if (loginMatched.length === 0){
      const aux = [...logins]
      aux.push(data)
      setLogins(aux)

      window.alert(`Welcome new login, ${data.login}`)
    } else {

      if (loginMatched[0].password !== data.password){
        window.alert(`Wrong password to login ${loginMatched[0].login}`)
      } else {

        window.alert(`Welcome, existent login ${data.login}`)
      }
    }
  }

  return <div>
    <h1> <Link to = "/" > return to begin </Link></h1>
    <Box>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <h2>Login</h2>

        <Input
          placeholder="Login"
          {...register('login')}
        />

        <Input type="password"
          placeholder="password"
          {...register('password')}
        />

        <Input type="submit" value={"go"} />
      </Form>
    </Box>

  </div>

} 

export default LoginScreen
