import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Box, Grid } from '@material-ui/core'

import PublicIcon from '@material-ui/icons/Public';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Icon, Tooltip } from '@material-ui/core' 

const ImageWithOverlay = ({ image, mainText, header, subtitle, buttonText1, buttonText2, right }) => {

  const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent',
        zIndex: '99999',
        border: 'none',
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',
            height: 'fit-content'
          },
        ['@media (min-width:1025px)']: { // eslint-disable-line no-useless-computed-key
            paddingTop: '25px',
            paddingBottom: '25px'
        },
    },
    imageContainer: {
      overflow: 'visible',
      position: 'relative',
      backgroundColor: 'transparent',
      width: '100%',
      ['@media (min-width:1025px)']: { // eslint-disable-line no-useless-computed-key
        marginTop: '20px',
      },
    },
    image: {
      // background: `url(${image})`,
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'contain',
      transform: 'translate3d(0px, 0px, 0px) scale(.99, .99)',
      position: 'absolute',
      top: '0%',
      left: '0%',
      height: '100%',
      width: '100%',
      transition: 'all .3s ease-in-out',

      '&:hover': {
        transform: 'translate3d(0px, 0px, 2px) scale(1, 1)',
     },
    },
    imagePosWrapperRight: {
      position: 'relative',
      marginBottom: '2%',
      backgroundColor: 'transparent',

      ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        marginRight: '0',
      },
      
      ['@media (min-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        marginRight: '16.66667%',
      },

      ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
        marginRight: '16.66667%',
      },
    },
    imagePosWrapperLeft: {
      position: 'relative',
      marginBottom: '2%',
      backgroundColor: 'transparent',

      ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        marginLeft: '0',
      },
      
      ['@media (min-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        marginLeft: '16.66667%',
      },

      ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
        marginLeft: '16.66667%',
      },
    },
    imageWrapper: {
      position: 'relative',
      // width: '100%',
      // height: '100%',
      padding: '49% 100% 0 0',
    },
    imageMask: {
      transform: 'matrix(1, 0, 0, 1, 0, 0)',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent'
    },
    textBoxPosWrapper: {
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        textAlign: 'right',
        backgroundColor: '#ffffff',
        color: 'black',
        zIndex: '20',
        // boxShadow: '6px 6px 1px #DF3C3A, 6px 6px 0px #EFAE3D, 12px 12px 0px #EBF952',
        ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            left: '0',
            top: '-25px',
            padding: '40px 30px 20px 30px',
            margin: '0',
            position: 'relative'
          },
      
        ['@media (min-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            bottom: '0',
            right: '0',
            margin: '0',
            maxWidth: '460px',
            padding: '4.226%',
            position: 'absolute',
        },

        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            bottom: '-5%',
            right: '-5%',
            margin: '0',
            minWidth: '450px',
            padding: '4.226%',
            position: 'absolute',
        },
    },
    textBoxPosWrapperLeft: {
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        backgroundColor: '#ffffff',
        color: 'black',
        zIndex: '20',
        textAlign: 'left',

        '&:hover': {
       },

        ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            right: '0',
            padding: '40px 30px 20px 30px',
            margin: '0',
            top: '-25px',
            position: 'relative'
          },
      
        ['@media (min-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            bottom: '0',
            left: '0',
            margin: '0',
            maxWidth: '460px',
            padding: '4.226%',
            position: 'absolute',
        },

        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            bottom: '-5%',
            left: '-5%',
            margin: '0',
            minWidth: '450px',
            padding: '4.226%',
            position: 'absolute',
        },
    },
    header: {
        margin: 0,
        marginBottom: '0.6666666667rem',
        lineHeight: '1.111111111',
        color: '#222021',
        fontSize: '36px',

        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '20px'
          },
    },
    subtitle: {
        fontSize: '16px',
        marginTop: '0px',
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '12px'
          },
    },
    mainText: {
        color: 'rgb(224,30,60)',
        fontSize: '18px',
        lineHeight: '1.1666666667',
        fontWeight: '400',
        textTransform: 'uppercase',
        margin: 0,
        marginBottom: '10.0px',

        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '10px',
            letterSpacing: '0'
          },
    },
    iconContainer: {
      textAlign: 'left',
    },
    iconContainerLeft: {
      textAlign: 'right'
    },
    icon: {
        color: '#172021',
        background: '#172021'
    },
    links: {
        color: '#172021',
        fill: '#172021',
        margin: '3px',
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
  });
  
  const classes = useStyles();

  // const imageSrc = require(image)

  return (
    <Box className={classes.root}>
            <Box square={true} marginTop={4} className={classes.imageContainer}>
              <Box className={right ? classes.imagePosWrapperRight : classes.imagePosWrapperLeft}>
                  <Box className={classes.imageWrapper}>
                    <Box elevation={10} className={classes.imageMask}>
                      <img src={image} alt={mainText} className={classes.image}/>
                    </Box>
                  </Box>
              </Box>
              {console.log(image)}
              <Paper elevation={10} square={true} className={right ? classes.textBoxPosWrapper : classes.textBoxPosWrapperLeft}>
                <Grid container spacing={0}>

                    <Grid item xs={12}>
                    <h3 className={classes.header}>{mainText}</h3>
                    </Grid>

                    <Grid item xs={12}>
                    <p className={classes.mainText}>{header}</p>
                    <p className={classes.subtitle}>{subtitle}</p>
                    </Grid>

                    <Grid item xs={12} className={right ? classes.iconContainer : classes.iconContainerLeft}>
                        {buttonText1 &&
                        <Tooltip title="Go to Github Page" placement="top-end">
                          <a className={classes.links} href={buttonText1}>
                            <Icon
                            fontSize={'default'} 
                            color={'inherit'}
                            component={GitHubIcon} />
                          </a>
                        </Tooltip>
                        }
                        {buttonText2 &&
                        <Tooltip title="Go to Website" placement="top-start">
                          <a className={classes.links} href={buttonText2}>
                            <Icon
                            fontSize={'default'} 
                            color={'inherit'}
                            component={PublicIcon} />
                          </a>
                        </Tooltip>
                        }
                    </Grid>

                </Grid>
              </Paper>
            </Box>
    </Box>
  );
};

export default ImageWithOverlay;
