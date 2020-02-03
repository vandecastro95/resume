import React from 'react';
import { makeStyles, Box} from '@material-ui/core'
import PortfolioList from './portfolioList';

import ImageWithOverlay from './ImageWithOverlay';

const useStyles = makeStyles({
    page2: {
        background: '#eeeeee',
        width: '100%',
    },
    root: {  
        margin: '0 auto'
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

                {
                    PortfolioList.map((item, index) => (
                        <Box className={item.class === 'gray' ? classes.white : classes.gray} key={item.id}>                        
                            <ImageWithOverlay 
                                image={item.photo}
                                mainText={item.title}
                                header={item.p}
                                subtitle={item.description}
                                buttonText1={item.github}
                                buttonText2={item.app}
                                right={ index % 2 === 1 }
                            />
                        </Box>
                    ))
                }
            </Box>

        </Box>
    )
}

export default Portfolio;