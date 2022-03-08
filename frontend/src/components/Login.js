import React, { useState } from 'react'
import tokenHelper from '../services/tokenHelper'
import loginService from '../services/login'
import { makeStyles, Button, Box, TextField, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        minHeight: '50vh'
    },
    form: {
        // border: '1px solid #cdcdcd',
        padding: '40px'
    }
})

const Login = ({ setUser }) => {
    const classes = useStyles()
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
        <Grid container justify="center" alignItems="center" className={classes.root}>

            <form onSubmit={onSubmit} className={classes.form}>
                <Grid container direction="column" alignItems="center">
                    {/* <Typography variant="h6">Virtual Wardrobe</Typography> */}
                    <Box my={1}>
                        <TextField variant="standard" value={username} label="Username" onChange={({ target }) => setUsername(target.value)} />
                    </Box>
                    <Box my={1}>
                        <TextField variant="standard" type="password" value={password} label="Password" onChange={({ target }) => setPassword(target.value)} />
                    </Box>
                    <Box mt={2}>
                        <Button variant="contained" color="primary" type="submit">login</Button>
                    </Box>
                </Grid>
            </form>
        </Grid>
    )
}

export default Login