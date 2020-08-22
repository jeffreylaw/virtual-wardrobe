import React from 'react'
import './SelectItem.css'
import { Image } from 'cloudinary-react'
import { Button, Typography } from '@material-ui/core';


const SelectItem = ({ items, category, update }) => {
    if (items.length === 0) {
        return null
    }

    return (
        <div className="select-item-div">
            <Typography variant="h5">Your {category}</Typography>
            <div className="scrolling-wrapper">
                {
                    items.map(item =>
                        <div className="card" key={item.id}>
                            <Image publicId={item.imageID} cloudName="ddm0yp9dq" />
                            <br />
                            <Button variant="contained" color="primary" onClick={() => update(item)}>
                                Choose
                        </Button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SelectItem