import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import itemsService from '../services/items'
import { Image } from 'cloudinary-react'
import { Grid, Card, CardContent, CardActions, Typography, Button, makeStyles, Box } from '@material-ui/core';
import NotificationSnackbar from '../components/NotificationSnackbar'


const useStyles = makeStyles({
    itemCard: {
        fontSize: '16px',
        margin: '12px',
    }
})

const Items = ({ items, setItems }) => {
    const classes = useStyles()
    const history = useHistory()
    const [showNotification, setShowNotification] = useState(false)
    const [showErrorNotification ,setShowErrorNotification] = useState(false)
    const [message, setMessage] = useState('')

    const deleteItem = (id) => {
        try {
            itemsService.deleteItem(id).then(response => {
                if (response.status === 204) {
                    setItems(items.filter(item => item.id !== id))
                    setMessage('Successfully deleted item')
                    setShowNotification(true)
                }
            })
        } catch (exception) {
            setMessage(`Error: ${exception}`)
            setShowErrorNotification(true)
            console.log('Error:', exception)
        }
    }

    return (
        <Box my={3}>
            <Grid container direction="column" alignItems="center">
                <Typography variant="h3">Wardrobe</Typography>
                <Grid container>
                    {items.map(item =>
                        <Card key={item.id} className={classes.itemCard}>
                            <CardContent>
                                <Grid container justify="center">
                                    {item.imageID && <Image publicId={item.imageID} cloudName="ddm0yp9dq" />}
                                </Grid>
                                <p>Brand: {item.brand ? item.brand : 'unspecified'}
                                    <br />
                                    Description: {item.description}
                                    <br />
                                    Category: {item.category}
                                </p>
                            </CardContent>
                            <CardActions>
                                <Grid container justify="flex-end">
                                    <Button color="primary" onClick={() => history.push(`/items/${item.id}`)}>Edit</Button>
                                    <Button color="primary" onClick={() => deleteItem(item.id)}>Delete</Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    )}
                </Grid>
            </Grid>
            <NotificationSnackbar showNotification={showNotification} setShowNotification={setShowNotification} type='success' message={message} />
            <NotificationSnackbar showNotification={showErrorNotification} setShowNotification={setShowErrorNotification} type='error' message={message} />
        </Box>
    )
}

export default Items