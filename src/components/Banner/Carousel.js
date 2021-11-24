import { makeStyles } from '@material-ui/core'
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import LineChart from '../LineChart';

const Carousel = () => {
    const useStyles = makeStyles(() => ({
        carousel: {
            height: "50%",
            display: "flex",
            alignItems: "center"
        },
        carouselItem: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            textTransform: "uppercase",
            color: "white",
            marginBottom: 10
        }
    }))
    const classes = useStyles();

    const items1 = [
        <LineChart />,
        <LineChart />,
        <LineChart />,
    ]
    const responsive = {
        0: {
            items: 2
        },
        512: {
            items: 3
        }
    }
    return (
        <div className={classes.carousel}>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableButtonsControls
                responsive={responsive}
                autoPlay
                items={items1}
            />
        </div>
    )
}

export default Carousel
