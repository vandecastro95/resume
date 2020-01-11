import React, {useState, useEffect} from 'react';
import { makeStyles, Paper, Box, Grid, Typography } from '@material-ui/core'
import PortfolioList from './portfolioList';

import Bento from '../assets/benTo.jpg';
import ProxyStrike from '../assets/proxyStrike.jpg';
import ImageWithOverlay from './ImageWithOverlay';

const useStyles = makeStyles({
    page2: {
        background: '#eeeeee',
        width: '100%',
    },
    root: {  
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
    },
    gray: {
        background: '#eeeeee',
        width: '100%'
    },
    white: {
        background:'#ffffff'
    }
})

const Portfolio = () => {

    //({ image, mainText, header, subtitle, buttonText1, buttonText2, right })

    const classes = useStyles();

    return (
        <Box className={classes.page2}>

            <Box className={classes.root}>
                <Box className={classes.white}>

                    <ImageWithOverlay 
                        image={`${process.env.PUBLIC_URL}/assets/benTo.jpg`}
                        mainText={"ProxyStrike"}
                        header={"Web Development"}
                        subtitle={`Front End Development with HTML, and CSS`}
                        github={"Github"}
                        
                    />
                </Box>

                <Box className={classes.gray}>
                    <ImageWithOverlay 
                        image={`${process.env.PUBLIC_URL}/assets/proxyStrike.jpg`}
                        mainText={"ProxyStrike"}
                        header={"Web Development"}
                        subtitle={"ASDADASDSADASDFASDAS"}
                        buttonText1={"Github"}
                        buttonText2={"Site"}
                        right
                    />
                </Box>

                {
                    PortfolioList.map((item, index) => (
                        <Box className={item.class == 'gray' ? classes.white : classes.gray} key={item.id}>                        
                            <ImageWithOverlay 
                                image={item.photo}
                                mainText={item.title}
                                header={"Web Development"}
                                subtitle={"ASDADASDSADASDFASDAS"}
                                buttonText1={"Github"}
                                buttonText2={"Site"}
                                right={ index % 2 == 1 }
                            />
                        </Box>
                    ))
                }
            </Box>

        </Box>
    )
}

export default Portfolio;