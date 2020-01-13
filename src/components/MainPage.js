import React from 'react';
import { Paper, makeStyles, Grid, Typography, Avatar, Button, Icon } from '@material-ui/core'
import background from '../assets/background.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from './Header'

import avatar from '../assets/me.jpg';
import DownIcon from '../assets/arrow_down.png';
import sendIcon from '../assets/send.png';

const useStyles = makeStyles({
    root: { 
        height: '100%',
        minHeight: '100vh',
        backgroundColor: '#b1f4ff',
        border: 'none',
        display: 'flex',
        flexDirection: 'column'
        // borderRight: '5px solid #7fc1cc',
        // borderTop: '5px solid #7fc1cc',
        // borderLeft: '5px solid #7fc1cc'
    },
    container: {
            display: 'fixed',
         width: '100%',
         maxWidth: '900px',
         padding: '20px',
        //  background: '#F9FBFB', 
         margin: '0px auto'
    },
    Header: {
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background})`,
        backgroundSize: '110% auto',
        backgroundPosition: '35% 47%',
        height: '200px'
    },
    subtitle: {
        textAlign: 'left',
        fontSize: '16px',
        fontWeight: '500',
        verticalAlign: 'baseline',
        lineHeight: '1.6',
        '@media (max-width:1000px)': {
          fontSize: '13px',
          marginTop: '10px'
        },
    },
    subtitleText: {
        marginBottom: '30px',
        textAlign: 'left',
        color: '#172021'
    },
    header: {
        textAlign: 'left',
        fontFamily: "'Lato', sans-serif",
        whiteSpace: 'pre-line',
        '@media (min-width:600px)': {
          fontSize: '4.5rem',
          padding: '40px 30px',
        },
    },
    headerName: {
        color: '#DF3C3A', 
        // fontSize: '1.6rem',
        fontWeight: '700',
        textShadow: '6px 6px 0px #EFAE3D, 12px 12px 0px #EBF952',
        '@media (max-width:900px)': {
          textShadow: '3px 3px 0px #EFAE3D, 6px 6px 0px #EBF952',
        },
    },
    shadowedText: {
        color: '#DF3C3A',
        textShadow: '6px 6px 0px #EFAE3D, 12px 12px 0px #EBF952',

        '@media (max-width:900px)': {
          textShadow: '3px 3px 0px #EFAE3D, 6px 6px 0px #EBF952',
        },
    },
    avatar: {
        height: '80px',
        width: '80px',
        margin: 'auto'
    },
    headerText: {
        fontFamily: `'Bebas Neue', sans-serif`,
        fontSize: '4.8rem',
        letterSpacing: '.5',
        lineHeight: '1',
        fontWeight: '700',
        textAlign: 'right',
        '@media (max-width:1000px)': {
          fontSize: '4rem',
        },
        '@media (max-width:800px)': {
          marginTop: '3rem',
          marginBottom: '3rem',
          fontSize: '3.2rem',
        },
    },
    downIcon: {
        width: '100%',
        maxWidth: '900px',
        marginTop: '20px',
        marginBottom: '20px'
    },
    downIconImg: {
        imageRendering: 'auto',
        padding: '10px',
        background: '#eeeeee',
        borderRadius: '50%',
        marginRight: 'auto',
        cursor: 'pointer',
        transition: '.2s all ',
        '&:hover': {
            background: '#bdbdbd'
        },
        '@media (max-width:1000px)': {
          display: 'none'
        },
    },
    socialMedia: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#172021'
    },
    icon: {
        color: '#172021',
        background: '#172021'
    },
    links: {
        color: '#172021',
        fill: '#172021',
        '&:hover': {
            color: '#172021'
        },
        '&:visited': {
            color: '#172021'
        },
        '&:active': {
            color: '#172021'
        }
    }
})

const MainPage = () => {
    const classes = useStyles()

    return (
    <Paper elevation={4} square className={classes.root}>
    
    <Header />
        <Grid container spacing={0} className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography className={classes.headerText}>
                    Hey, I am <a className={classes.headerName}>Van De Castro</a>{`,
                      —a`} <b>Software Developer</b> {`based in `}<b className={classes.shadowedText}>Austin, Texas</b>.
                    {` Specialized in `}<b>Web Development</b> and &nbsp;<b>React.js</b>
                </Typography>
            </Grid>
            
            <Grid item xs={12} className={classes.subtitle}>
                <div className={classes.subtitleText}>
                    &nbsp;&nbsp;&nbsp;&nbsp; Full Stack Developer with a hunger for
                    new technology, and a passion for growth. Adept at solving puzzles,
                    and finds opportunities where others see roadblocks. Brings 
                    experience from working at multiple startups to juggle priorities,
                    quickly identify issues, and implement effective solutions. 
                    Extensive experience in building web apps in the React.js and JavaScript Ecosystem,
                    Complete with State Management systems like Redux, Design Libraries like Material Ui
                    and Bootstrap, Webpack, and Responsive Web Design.
                    {/*
                    Extensive experience in building web apps with MVC model and
                    the React.js Ecosystem, Version control technologies such
                    as Git, and Github, Responsive Web design tools such as Flexbox, Grid, Material UI, and
                    Legacy libraries such as Jquery, Bootstrap, VanillaJs, QA and Unit Testing with Jest and Enzyme,
                    Backend technologies such as Webpack, MySQL, NPM, Babel,  Express.js, GraphQL and Apollo */ }
            
                </div>
            </Grid>

            <Grid item xs={12}>
                <a className={classes.links} href="https://www.linkedin.com/in/vandecastro/">
                <Icon
                fontSize={'large'} 
                color={'inherit'}
                component={LinkedInIcon} />  
                </a>
                <a className={classes.links} href="https://github.com/vandecastro95">
                <Icon
                    fontSize={'large'} 
                    color={'inherit'}
                    component={GitHubIcon} />
                </a>
            </Grid>
            <Grid item xs={12} className={classes.downIcon}>
                <div mb={8} mt={6} className={classes.socialMedia}>
                
                </div>
                
                {false && <img src={DownIcon} className={classes.downIconImg} height="30" width="30"/>}
            </Grid>
        </Grid>
    </Paper>
    )
}

export default MainPage;