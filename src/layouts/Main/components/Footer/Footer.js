import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Icon, Typography, CardContent } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {isMobile} from 'react-device-detect';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 0),
    },
    background: "#000000",
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    
    marginLeft: 'auto',
    marginRight: 'auto'
    
  },
  logoContainerItem: {
    paddingTop: 0,
    alignItems:"center"
  },
  logoContainer: {
    width: 320,
    height: 72,
    
  },
  logoImage: {
    width: '25%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  socialIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: theme.palette.secondary.main,
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {  
    },
  },
  icon: {
    marginRight:7,
    fontSize: 30,
    color: "#FFFFFF",
  },
  textoFooter:{
    color: "#FFFFFF"
  },
  centrado:{
    paddingLeft: "auto",
    paddingRight: "auto"
  },
  sep:{
    marginLeft:25,
    backgroundColor: "white",
  },
  negro:{
    backgroundColor: "black"
  }
}));

const Footer = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)} >
      <div className={classes.footerContainer} >
       
            <div >
              <Image
                className={classes.logoImage}
                src="/images/illustrations/logoFooter.png"
                alt="Concretos2H"
              />
            

            <div align="center">
               <IconButton href="https://www.facebook.com/concretos2hoficial">
                  <FacebookIcon className={classes.icon} /> 
              </IconButton> 

              <IconButton href="https://www.instagram.com/concretos2h_/">
                <InstagramIcon  className={classes.icon} /> 
              </IconButton>

              <IconButton>
                <TwitterIcon className={classes.icon} /> 
              </IconButton>

              <IconButton>
                <YouTubeIcon className={classes.icon} />  
              </IconButton> 
            </div>

             <div align="center" container>
               <div>
                 <Typography variant="h6" className={classes.textoFooter}> Aceptamos las siguientes formas de pago: </Typography>
               </div>
               
               <div align="center" className={classes.negro}>
                <Icon >
                    <img src="/images/logos/visa.svg" height="60" className={classes.sep}/>              
                </Icon> 

                <Icon >
                  <img src="/images/logos/transfer.svg" width="70" className={classes.sep}/>
                </Icon>

                <Icon>
                <img src="/images/logos/mastercard.svg" width="68" className={classes.sep}/>
                </Icon>

                <Icon>
                <img src="/images/logos/money.svg" width="65" className={classes.sep}/>
                </Icon> 

                <Icon>
                <img src="/images/logos/deposit.svg" width="65" className={classes.sep}/>
                </Icon>

                <Icon>                
                  <img src="/images/logos/check.svg" width="65" className={classes.sep}/>
                </Icon>
              </div>                
            </div>
             
        </div>

      </div>
      <Marca/>
    </div>
  );
};

const Marca = props => {
  const classes = useStyles()

  if (isMobile) {
    return (
    <Typography  align="center" variant="h6" className={classes.textoFooter} >© 2016-2021 <br/> Concretos2H SA de CV</Typography>)
}else{
  return (
  <Typography  align="center" variant="h6" className={classes.textoFooter} >© 2016-2021 Concretos2H SA de CV</Typography>)
}
  
}

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
