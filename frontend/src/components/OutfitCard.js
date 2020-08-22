import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Card, CardContent, makeStyles, Button, Popover, Typography } from '@material-ui/core';
import { Share, Delete, VisibilityOff, Visibility } from '@material-ui/icons';
import outfitService from '../services/outfits'
import { Image } from 'cloudinary-react'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10px',
        marginBottom: '10px',
    },
    popover: {
        padding: '16px'
    }
}))

const OutfitCard = ({ outfit, outfits, setOutfits, setShowNotification, setShowErrorNotification, setMessage }) => {
    const classes = useStyles()
    const history = useHistory()
    const [anchorEl, setAnchorEl] = useState(false)

    console.log(outfit.id)

    const deleteOutfit = (id) => {
        try {
            outfitService.deleteOutfit(id).then(response => {
                if (response.status === 204) {
                    setOutfits(outfits.filter(other => other.id !== id))
                    setMessage('Successfully deleted outfit')
                    setShowNotification(true)
                }
            })
        } catch (exception) {
            setMessage(`Error: ${exception}`)
            setShowErrorNotification(true)
            console.log('Error:', exception)
        }
    }

    const updateOutfit = (id) => {
        const outfitObject = { ...outfit, private: !outfit.private }
        outfitService.update(id, outfitObject).then(updatedOutfit => {
            setOutfits(outfits.map(outfit => {
                if (outfit.id === id) {
                    return updatedOutfit
                }
                return outfit
            }))
        }).catch(exception => {
            console.log(exception)
            if (exception.status === 401) {
                history.push('/login')
            } else if (exception.status === 400) {
                console.log(exception.data.error)
            }
        })
    }
    
    const id = Boolean(anchorEl) ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (!outfit) {
        return null
    }


    return (
        <Card className={classes.root}>
            <CardContent>
                <div>
                    {outfit.headwear && <Image publicId={outfit.headwear.imageID} cloudName="ddm0yp9dq" />}
                    {outfit.outerwear && <Image publicId={outfit.outerwear.imageID} cloudName="ddm0yp9dq" />}
                    {outfit.top && <Image publicId={outfit.top.imageID} cloudName="ddm0yp9dq" />}
                    {outfit.bottom && <Image publicId={outfit.bottom.imageID} cloudName="ddm0yp9dq" />}
                    {outfit.socks && <Image publicId={outfit.socks.imageID} cloudName="ddm0yp9dq" />}
                    {outfit.footwear && <Image publicId={outfit.footwear.imageID} cloudName="ddm0yp9dq" />}
                </div>
            </CardContent>
            <CardContent>
                <Grid container justify="center">
                    <Button startIcon={<Share />} variant="contained" color="primary" onClick={handleClick}>Share</Button>
                    {outfit.private ?
                        <Button startIcon={<VisibilityOff />} variant="contained" color="primary" onClick={() => updateOutfit(outfit.id)}>Mark as private</Button> :
                        <Button startIcon={<Visibility />} variant="contained" color="primary" onClick={() => updateOutfit(outfit.id)}>Mark as public</Button>}


                    <Button startIcon={<Delete />} variant="contained" color="secondary" onClick={() => deleteOutfit(outfit.id)}>Delete outfit</Button>
                </Grid>
            </CardContent>

            <Popover id={id} open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}>
                <Typography className={classes.popover}>
                    <a href="https://www.google.com">www.google.com</a>
                    <button onClick={() => history.push(`/outfits/${outfit.id}`)}>Test</button>
                    </Typography>
            </Popover>

        </Card>
    )
}

export default OutfitCard