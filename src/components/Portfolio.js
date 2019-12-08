import React, {useState, useEffect} from 'react';
import { makeStyles, Paper, Box, Grid, Typography } from '@material-ui/core'

import Bento from '../assets/benTo.jpg';
import ProxyStrike from '../assets/proxyStrike.jpg';
import ImageWithOverlay from './ImageWithOverlay';

const useStyles = makeStyles({
    page2: {
        background: '#f0f0f0',
        width: '100%',
    },
    root: {
        
        maxWidth: '900px',
        margin: '0 auto'
    },
    ProxyStrike: {
        width: '96%',
        minHeight: 'auto',
        background: `url(${ProxyStrike})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center'
    },
    portfolioHeader: {
        textAlign: 'left',
        width: 'fit-content',
        padding: '20px 0',
        fontWeight: '700',
        margin: '20px'
    }
})

const Portfolio = () => {

    //({ image, mainText, header, subtitle, buttonText1, buttonText2, right })

    const classes = useStyles();

    return (
        <Box className={classes.page2}>
            <Box className={classes.root}>
                <Box>

                    <ImageWithOverlay 
                        image={ProxyStrike}
                        mainText={"ProxyStrike"}
                        header={"Web Development"}
                        subtitle={`Front End Development with HTML, and CSS`}
                        github={"Github"}
                        right
                    />

                    <ImageWithOverlay 
                        image={Bento}
                        mainText={"ProxyStrike"}
                        header={"Web Development"}
                        subtitle={"ASDADASDSADASDFASDAS"}
                        buttonText1={"Github"}
                        buttonText2={"Site"}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Portfolio;