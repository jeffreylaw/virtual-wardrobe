import React, { useState } from 'react'
import tokenHelper from '../services/tokenHelper'
import loginService from '../services/login'
import { Grid } from '@material-ui/core';


const Login = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
            loginService.login({ username, password }).then(response => {
                if (response.status === 200) {
                    let user = response.data
                    tokenHelper.setToken(user.token)
                    window.localStorage.setItem(
                        'loggedInUser', JSON.stringify(user)
                    )
                    setUser(user)
                }
            }).catch(exception => {
                console.log(exception)
            })
        
    }

    return (
        <Grid container justify="center" alignItems="center" style={{ minHeight: '50vh' }}>
            <form onSubmit={onSubmit}>
                <div>
                    Username:
                <input type="text" value={username} name="Username" onChange={({ target }) => setUsername(target.value)} />
                </div>
                <div>
                    Password:
                <input type="text" value={password} name="Password" onChange={({ target }) => setPassword(target.value)} />
                </div>
                <button type="submit">login</button>
            </form>
        </Grid>
    )
}

export default Login