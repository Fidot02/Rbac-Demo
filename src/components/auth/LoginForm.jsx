import React from 'react'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import {useNavigate} from 'react-router-dom'






const LoginForm = () => {    
const {login} = useContext(AuthContext);
const navigate = useNavigate();
const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')

const handleSubmit = (e) =>{
    e.preventDefault();
    if (login(userName,password)){
        alert('login successful')
        navigate('/')
    }
    else {
        setError('username or password not correct')
    }

}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && (<p>{error}</p>)}
      <input type="text" placeholder='username' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button type='submit'>Login</button>
    </form>
    
    </>
  )
}

export default LoginForm