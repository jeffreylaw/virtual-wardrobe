import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import itemService from '../../services/items'
import { Typography, Button, Select, MenuItem, InputLabel, TextField, Box, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    formButton: {
        width: '150px'
    }
}))

const ItemForm = ({ items, setItems }) => {
    const classes = useStyles()
    const history = useHistory()
    const [brand, setBrand] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [imageID, setImageID] = useState('')
    const [widget, setWidget] = useState(null)


    useEffect(() => {
        setWidget(window.cloudinary.createUploadWidget({
            cloudName: 'ddm0yp9dq',
            uploadPreset: 'je7yqthn',
            sources: ['local', 'camera',],
            multiple: false,
            maxFiles: 1,
            thumbnails: '.uploaded',
            singleUploadAutoClose: false,
        }, (error, result) => {
            checkUploadResult(error, result)
        })
        )
    }, [])

    const checkUploadResult = (error, result) => {
        if (!error && result && result.event === 'success') {
            console.log('Done', result.info)
            setImageID(result.info.public_id)
        }
    }

    const showWidget = () => {
        widget.open()
    }

    const addItem = async (event) => {
        event.preventDefault()
        const itemObject = { brand, description, category, imageID }
        itemService.create(itemObject).then(returnedItem => {
            setItems(items.concat(returnedItem))
            setDescription('')
            setCategory('')
            history.push('/items')
        }).catch(exception => {
            console.log(exception)
            if (exception.status === 401) {
                history.push('/login')
            } else if (exception.status === 400) {
                console.log(exception.data.error)
            }
        })
    }

    return (
        <Box my={3}>
            <Grid container direction="column" alignItems="center" justify="center">
                <Typography variant="h3">Add Item</Typography>

                <form onSubmit={addItem}>
                    <TextField required id="brand" label="Brand" onChange={(event) => setBrand(event.target.value)} /><br />
                    <TextField required id="description" label="Description" onChange={(event) => setDescription(event.target.value)} /><br />
                    <br />
                    <InputLabel required id="category">Category</InputLabel>
                    <Select value={category} onChange={(event) => setCategory(event.target.value)} style={{ minWidth: 120 }}>
                        <MenuItem value="headwear">Headwear</MenuItem>
                        <MenuItem value="outerwear">Outerwear</MenuItem>
                        <MenuItem value="tops">Top</MenuItem>
                        <MenuItem value="bottoms">Bottom</MenuItem>
                        <MenuItem value="socks">Socks</MenuItem>
                        <MenuItem value="footwear">Footwear</MenuItem>
                    </Select>

                    <div>
                        <Box my={2}>
                            <Button variant="contained" color="primary" onClick={showWidget} className={classes.formButton}>Upload image</Button>
                        </Box>
                        <div className="uploaded"></div>
                    </div>
                    <Button variant="contained" color="primary" type="submit" className={classes.formButton}>Add</Button>
                </form>
            </Grid>
        </Box>
    )
}

export default ItemForm