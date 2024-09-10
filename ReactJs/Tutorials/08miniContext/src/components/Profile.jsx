import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSunmit = () => {

    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' 
        value={username}
        onChange={()=> setUsername(e.target.value)}
        placeholder='username' />
        <input type='text' 
        value={password}
        onChange={()=> setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSunmit}>Submit</button>
    </div>
  )
}

export default Login