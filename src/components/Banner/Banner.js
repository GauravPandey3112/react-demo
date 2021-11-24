import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Carousel from './Carousel'

const useStyles = makeStyles(() => ({
    banner: {
        // backgroundImage: "url(./banner2.jpg)"
        background: "#131111"
    },
    bannerContent: {
        height: 500,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "center"
    },
    tagline: {
        display: 'flex',
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
    },
    carousel: {
        height: "50%"
    }

}))

const Banner = () => {
    const classes = useStyles()
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat"
                        }}
                    >Chart Representation</Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat"
                        }}
                    >Track all your Employees' Info</Typography>
                </div>
                <Carousel className={classes.carousel}></Carousel>
            </Container>
        </div>
    )
}

export default Banner
