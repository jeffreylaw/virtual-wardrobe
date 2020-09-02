import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import userService from '../services/users'
import { makeStyles, Button, Box, TextField, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        minHeight: '50vh',
        minWidth: '25vw',
        color: '#1e1e24'
    },
    form: {
        border: '1px solid #cdcdcd',
        paddingLeft: '40px',
        paddingRight: '40px',
        paddingTop: '20px',
        paddingBottom: '20px',
        background: '#fefcfb'
    }
})

const Register = () => {
    const classes = useStyles()
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
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <form onSubmit={onSubmit} className={classes.form}>
                <Grid container direction="column" alignItems="center">
                    <Typography variant="h6">Sign up</Typography>
                    <Box my={1}>
                        <TextField variant="outlined" type="text" value={username} label="Username" onChange={({ target }) => setUsername(target.value)} />
                    </Box>
                    <Box my={1}>
                        <TextField variant="outlined" type="text" value={name} label="Name" onChange={({ target }) => setName(target.value)} />
                    </Box>
                    <Box my={1}>
                        <TextField variant="outlined" type="password" value={password} label="Password" onChange={({ target }) => setPassword(target.value)} />
                    </Box>
                    <Box mt={2}>
                        <Button variant="contained" color="primary" type="submit">Sign up</Button>
                    </Box>
                </Grid>
            </form>
        </Grid>
    )
}

export default Register