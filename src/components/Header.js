import React from 'react';
import { makeStyles, Paper, Avatar, Button } from '@material-ui/core';
import avatar from '../assets/me.jpg';

const useStyles = makeStyles({
    root: {
        minHeight: '10vh',
        width: '100%',
        marginTop: '0',
        backgroundColor: '#172021'
    },
    avatarContainer: {
        maxWidth: '900px',
        display: 'flex',
        margin: '0 auto',
        padding: '10px 0'
    },
    avatar: {
        margin: '0 auto',
        height: '70px',
        width: '70px',
        marginLeft: '10px',
    },
    navContainer: {
        marginTop: '20px'
    },
    nav: {
        color: '#ffffff',
        fontWeight: '400',
        textTransform: 'capitalize',
        letterSpacing: '0px',
        lineHeight: '1px',
        fontSize: '15px',
        transition: 'all 0.5s',
        margin: '0 20px',
        '&:hover': {
            // color: '#DF3C3A',
            // textShadow: '2px 2px 0px #EFAE3D, 4px 4px 0px #EBF952',
            background: 'none',
            textDecoration: 'underline'
        }
    }
})

const Header = () => {
    
    const classes = useStyles()

    return (
    <Paper square elevation={10} className={classes.root}>
        <div className={classes.avatarContainer}>
                <Avatar 
                    alt='Van De Castro'
                    src={avatar} 
                    className={classes.avatar} 
                />
            <div item xs={12} className={classes.navContainer}>
            <Button className={classes.nav}>About</Button> <Button className={classes.nav}>Work</Button>
            </div>
        </div>
    </Paper>
)}

export default Header;