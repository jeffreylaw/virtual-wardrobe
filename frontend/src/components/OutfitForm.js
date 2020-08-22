import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import outfitService from '../services/outfits'
import SelectItem from './SelectItem/SelectItem'
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { Image } from 'cloudinary-react'


const OutfitForm = ({ items, outfits, setOutfits }) => {
    const history = useHistory()
    const [headwear, setHeadwear] = useState('')
    const [outerwear, setOuterwear] = useState('')
    const [top, setTop] = useState('')
    const [bottom, setBottom] = useState('')
    const [socks, setSocks] = useState('')
    const [footwear, setFootwear] = useState('')

    const headwearItems = items.filter(item => item.category === 'headwear')
    const outerwearItems = items.filter(item => item.category === 'outerwear')
    const topItems = items.filter(item => item.category === 'tops')
    const bottomItems = items.filter(item => item.category === 'bottoms')
    const socksItems = items.filter(item => item.category === 'socks')
    const footwearItems = items.filter(item => item.category === 'footwear')

    useEffect(() => {

    })

    const createOutfit = async (event) => {
        event.preventDefault()
        const outfitObject = { 
            headwear: headwear.id || null, 
            outerwear: outerwear.id || null, 
            top: top.id, 
            bottom: bottom.id, 
            socks: socks.id || null, 
            footwear: footwear.id || null
        }
        console.log(outfitObject)
        outfitService.create(outfitObject).then(returnedOutfit => {
            console.log(returnedOutfit)
            setOutfits(outfits.concat(returnedOutfit))
            history.push('/outfits')
        })
    }

    return (
        <Box my={3}>
            <Typography variant="h3" align="center">
                Create outfit
            </Typography>
            <Box display="flex" justifyContent="center">
                {headwear &&
                    <Box my={1} mx={1}>
                        <Grid container direction="column">
                            <Image publicId={headwear.imageID} cloudName="ddm0yp9dq" />
                            <br />
                            <Button variant="contained" color="secondary" onClick={() => setHeadwear('')}>
                                Remove
                            </Button>
                        </Grid>
                    </Box>
                }
                {outerwear &&
                    <Box my={1} mx={1}>
                        <Grid container direction="column">
                            <Image publicId={outerwear.imageID} cloudName="ddm0yp9dq" />
                            <br />
                            <Button variant="contained" color="secondary" onClick={() => setOuterwear('')}>
                                Remove
                            </Button>
                        </Grid>
                    </Box>
                }
                {top &&
                    <Box my={1} mx={1}>
                        <Grid container direction="column">
                            <Image publicId={top.imageID} cloudName="ddm0yp9dq" />
                            <br />
                            <Button variant="contained" color="secondary" onClick={() => setTop('')}>
                                Remove
                            </Button>
                        </Grid>
                    </Box>
                }

                {bottom &&
                    <Box my={1} mx={1}>
                        <Grid container direction="column">
                            <Image publicId={bottom.imageID} cloudName="ddm0yp9dq" />
                            <br />
                            <Button variant="contained" color="secondary" onClick={() => setBottom('')}>
                                Remove
                            </Button>
                        </Grid>
                    </Box>
                }
                {socks &&
                    <Box my={1} mx={1}>
                        <Grid container direction="column">
                            <Image publicId={socks.imageID} cloudName="ddm0yp9dq" />
                            <br />
                            <Button variant="contained" color="secondary" onClick={() => setSocks('')}>
                                Remove
                            </Button>
                        </Grid>
                    </Box>
                }

                {footwear &&
                    <Box my={1} mx={1}>
                        <Grid container direction="column">
                            <Image publicId={footwear.imageID} cloudName="ddm0yp9dq" />
                            <br />
                            <Button variant="contained" color="secondary" onClick={() => setFootwear('')}>
                                Remove
                            </Button>
                        </Grid>
                    </Box>
                }
            </Box>
            <form onSubmit={createOutfit}>
                {top && bottom &&
                <Grid container justify="center">
                    <Button type="submit" variant="contained" color="primary" >
                        Save outfit
                    </Button>
                </Grid>
                }
                <SelectItem items={headwearItems} category='headwear' update={setHeadwear} />
                <SelectItem items={outerwearItems} category='outerwear' update={setOuterwear} />
                <SelectItem items={topItems} category='tops' update={setTop} />
                <SelectItem items={bottomItems} category='bottoms' update={setBottom} />
                <SelectItem items={socksItems} category='socks' update={setSocks} />
                <SelectItem items={footwearItems} category='footwear' update={setFootwear} />
            </form>
        </Box >
    )
}

export default OutfitForm