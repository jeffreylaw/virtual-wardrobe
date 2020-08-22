import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import userService from '../services/users'

const Register = () => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        const credentials = {
            username, password, name
        }
        userService.register(credentials).then(returnedUser => {
            console.log('Created user:', returnedUser)
            setUsername('')
            setPassword('')
            history.push('/login')
        })
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <div>
                    Username:
                <input type="text" value={username} name="Username" onChange={({ target }) => setUsername(target.value)} />
                </div>
                <div>
                    Name:
                <input type="text" value={name} name="Name" onChange={({ target }) => setName(target.value)} />
                </div>
                <div>
                    Password:
                <input type="text" value={password} name="Password" onChange={({ target }) => setPassword(target.value)} />
                </div>
                <button type="submit">Sign up</button>
            </form>

        </div>
    )
}

export default Register