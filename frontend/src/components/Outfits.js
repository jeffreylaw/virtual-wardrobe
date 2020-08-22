import React, { useState } from 'react'
import OutfitCard from './OutfitCard'
import { Typography, Box } from '@material-ui/core';
import NotificationSnackbar from './NotificationSnackbar'


const Outfits = ({ outfits, setOutfits }) => {
    const [showNotification, setShowNotification] = useState(false)
    const [showErrorNotification, setShowErrorNotification] = useState(false)
    const [message, setMessage] = useState('')

    return (
        <Box my={3}>
            <Typography variant="h3" align="center">
                My Outfits
            </Typography>
            {outfits.map(outfit =>
                <OutfitCard key={outfit.id} outfit={outfit} outfits={outfits} setOutfits={setOutfits} setShowNotification={setShowNotification} setShowErrorNotification={setShowErrorNotification} setMessage={setMessage}/>
            )}

            <NotificationSnackbar showNotification={showNotification} setShowNotification={setShowNotification} type='success' message={message} />
            <NotificationSnackbar showNotification={showErrorNotification} setShowNotification={setShowErrorNotification} type='error' message={message} />
        </Box>
    )
}

export default Outfits