import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import tokenHelper from '../services/tokenHelper'
import loginService from '../services/login'


const Login = ({ setUser }) => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({ username, password })
            tokenHelper.setToken(user.token)
            window.localStorage.setItem(
                'loggedInUser', JSON.stringify(user)
            )
            setUser(user)
            setUsername('')
            setPassword('')
            history.push('/')
        } catch (exception) {
            console.log('Error:', exception)
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <div>
                    Username:
                <input type="text" value={username} name="Username" onChange={({ target }) => setUsername(target.value)} />
                </div>
                <div>
                    Password:
                <input type="text" value={password} name="Password" onChange={({ target }) => setPassword(target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login