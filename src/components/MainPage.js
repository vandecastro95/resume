import React from 'react';
import { Paper, makeStyles, Grid, Typography, Avatar, Button } from '@material-ui/core'
import background from '../assets/background.jpg'

import avatar from '../assets/me.jpg';
import DownIcon from '../assets/arrow_down.png';
import sendIcon from '../assets/send.png';

const useStyles = makeStyles({
    root: { 

    },
    container: {
         width: '100%',
         maxWidth: '900px',
        //  background: '#F9FBFB', 
         margin: '40px auto',
    },
    Header: {
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background})`,
        backgroundSize: '110% auto',
        backgroundPosition: '35% 47%',
        height: '200px'
    },
    subtitle: {
        textAlign: 'left',
        fontSize: '18px',
        maxWidth: '900px',
        margin: '0 auto',
        verticalAlign: 'baseline',
        lineHeight: '1.6'
    },
    subtitleText: {
        margin: '20px',
        textAlign: 'justify'
    },
    header: {
        margin: 'auto',
        textAlign: 'left',
        fontFamily: "'Lato', sans-serif",
        whiteSpace: 'pre-line',
        fontWeight: '300',
        padding: '30px',
        '@media (min-width:600px)': {
          fontSize: '4.5rem',
          padding: '10px 30px',
        },
    },
    headerName: {
        color: '#709AB7', 
        // fontSize: '1.6rem',
        fontWeight: '700'
    },
    avatar: {
        height: '80px',
        width: '80px',
        margin: 'auto'
    },
    headerText: {
        fontSize: '4rem',
        lineHeight: '1',
        letterSpacing: '0px',
        textAlign: 'right',
        '@media (max-width:900px)': {
          fontSize: '1.8rem',
        }
    },
    downIcon: {
        width: '100%',
        maxWidth: '900px',
        marginTop: '30px'
    },
    downIconImg: {
        imageRendering: 'auto',
        padding: '10px',
        background: '#f0f0f0',
        borderRadius: '50%',
        marginLeft: 'auto',
        cursor: 'pointer',
        transition: '.5s all ',
        '&:hover': {
            background: '#bdbdbd'
        },
        '@media (max-width:900px)': {
          display: 'none'
        },
    }
})

const MainPage = () => {
    const classes = useStyles()

    return (
    <Paper elevation={0} square className={classes.root}>
        <Grid container spacing={0} className={classes.container}>
            
            <Grid item xs={12} className={classes.header}>
                <Typography className={classes.headerText}>
                    Hey, I am <a className={classes.headerName}>Van De Castro</a>{`,
                      —a`} <b>Software Developer</b> {`based in `}<b>Austin, Texas</b>.
                    {` Specialized in `}<b>Web Development</b> and <b>React.js</b>.
                </Typography>
            </Grid>
            
            <Grid item xs={12} className={classes.subtitle}>
                <div className={classes.subtitleText}>
                    &nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
                    consectetur dapibus nisi non mattis. Morbi sollicitudin eros
                    non convallis dictum. Pellentesque sit amet eleifend metus,
                    et egestas purus. In hac habitasse platea dictumst. Donec 
                    pulvinar libero non leo elementum, a gravida lacus fermentum.
                    Duis tempus nibh urna. Aliquam id ante viverra diam pulvinar
                    tincidunt. Pellentesque nec elementum enim. Aenean non dui 
                    justo. Phasellus imperdiet nisl purus, nec porttitor ipsum 
                    iaculis et. Vestibulum at eros at lacus pellentesque varius.
                    Duis sed odio et ex feugiat sollicitudin sed dapibus mi.
                </div>
            </Grid>
            <Grid item xs={12} className={classes.downIcon}>
                <img src={DownIcon} className={classes.downIconImg} height="30" width="30"/>
            </Grid>
        </Grid>
    </Paper>
    )
}

export default MainPage;