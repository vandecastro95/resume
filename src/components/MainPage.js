import React from 'react';
import { Paper, makeStyles, Grid, Typography, Icon, Tooltip } from '@material-ui/core'
// import background from '../assets/background.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import Header from './Header'
import DownIcon from '../assets/arrow_down.png';

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
         margin: '0px auto',
         '@media (max-width:768px)': {
           maxWidth: '600px'
         }
    },
    Header: {
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))`,
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
        '@media (max-width:500px)': {
            fontSize: '10px',
            marginTop: '10px'
          },
          '@media (max-width:320px)': {
            fontSize: '11px',
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
        fontSize: '5rem',
        marginBottom: '3rem',
        marginTop: '3rem',
        '@media (min-width:1500)': {
            marginBottom: '3rem',
            marginTop: '3rem',
            fontSize: '5.8rem',
            },
        '@media (max-width:1000px)': {
            marginBottom: '3rem',
            marginTop: '3rem',
            fontSize: '4rem',
        },
        '@media (max-width:768px)': {
          marginBottom: '3rem',
          marginTop: '1.8rem',
          fontSize: '3.8rem',
        },
        '@media (max-width:500px)': {
          marginBottom: '2rem',
          marginTop: '2rem',
          fontSize: '3rem',
        },
        '@media (max-width:390px)': {
          marginBottom: '1rem',
          marginTop: '1.8rem',
          fontSize: '2.618rem',
        }
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
        fontSize: 'inherit',
        letterSpacing: '.5',
        lineHeight: '1',
        fontWeight: '700',
        textAlign: 'right'
    },
    downIcon: {
        width: '100%',
        maxWidth: '900px',
        marginTop: '20px',
        marginBottom: '20px',
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
        margin: '5px',
        fontSize: '2rem',
        '@media (min-width:1024)': {
        fontSize: '3.5rem',
        },
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
                    Hey, I am <br></br><b className={classes.headerName}>Van De Castro</b>{`,
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
                <Tooltip title="LinkedIn" placement="top-end">
                <a className={classes.links} href="https://www.linkedin.com/in/vandecastro/">
                <Icon
                fontSize={'inherit'} 
                color={'inherit'}
                component={LinkedInIcon} />  
                </a>
                </Tooltip>
                <Tooltip title="Github" placement="top">
                <a className={classes.links} href="https://github.com/vandecastro95">
                <Icon
                    fontSize={'inherit'} 
                    color={'inherit'}
                    component={GitHubIcon} />
                </a>
                </Tooltip>
                <Tooltip title="Resume" placement="top-start">
                <a className={classes.links} href="https://drive.google.com/file/d/1Rz7W-oB9D8JfioZbYH3hFlLM0zyrQyq_/view?usp=sharing">
                <Icon
                    fontSize={'inherit'} 
                    color={'inherit'}
                    component={DescriptionIcon} />
                </a>
                </Tooltip>
            </Grid>
            <Grid item xs={12} className={classes.downIcon}>
                <div mb={8} mt={6} className={classes.socialMedia}>
                
                </div>
                
                {false && <img src={DownIcon} alt="down" className={classes.downIconImg} height="30" width="30"/>}
            </Grid>
        </Grid>
    </Paper>
    )
}

export default MainPage;