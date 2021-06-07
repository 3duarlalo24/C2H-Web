import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import { Paper, Divider, Typography, Grid } from '@material-ui/core'
import {isMobile} from 'react-device-detect';
import { Image } from 'components/atoms';
import theme from 'theme';

const useStyles = makeStyles(theme => ({
  immg:{
    boxShadow:
    '25px 60px 125px -25px rgba(80,102,144,0)',
  borderRadius: theme.spacing(2),
  },
  carrusel: {
    width: '550px', 
    borderRadius: theme.spacing(2),
   
  },
  carruselMobile:{
    width: '330px',   
    boxShadow:
    '25px 60px 125px -25px rgba(80,102,144,0)',
  borderRadius: theme.spacing(2),
  },
  altura:{
    height: '620px'
  },
  alturaMobile:{
    height: '470px'
  },
  alturaMobile2:{
    height: '400px'
  },
  alturaCarrusel:{
    height:'550px',
  },
  alturaCarrusel2:{
    height:'330px',
  }
}));

/**
 * Component to display the images
 *
 * @param {Object} props
 */
const Carrusel = props => {

    var imagenes = [
        {
            src:"/images/illustrations/car1.webp"
        },
        {
            src:"/images/illustrations/car2.webp"
        },
        {
            src:"/images/illustrations/car3.webp"
        },
        {
            src:"/images/illustrations/car4.webp"
        },
        {
            src:"/images/illustrations/car5.webp"
        },
        {
            src:"/images/illustrations/car6.webp"
        }
    ]

  const { src, srcSet, alt, lazy, lazyProps, className, ...rest } = props;

  const classes = useStyles();
  if(isMobile)
  {return(
    <Grid align="center"  data-aos="fade-up" >
      <Typography variant="h3" color="initial">Ventajas de trabajar con nosotros</Typography>
        <br/>
        <hr/>
        <br/>
      
         <Carousel
          className={classes.carruselMobile}
          next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`)} 
          prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
          interval={3500}
          timeout={500}
        >
          {
              imagenes.map( (item, i) => <Item key={i} item={item} /> )
          }
          </Carousel>  
    </Grid>
    ) }
    else
    {return(
      <Grid align="center" className={classes.altura} data-aos="fade-up">
        <Typography variant="h3" color="initial">Ventajas de trabajar con nosotros</Typography>
        <br/>
        <hr/>
        <br/>
        <Carousel
          className={classes.carrusel} 
          next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`)} 
          prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
          interval={3500}
          timeout={500}          
        >
          {
              imagenes.map( (item, i) => {
              return <Item key={i} item={item} /> })
          }   
        </Carousel>
      </Grid>
      ) }
   
};
function Item(props)
{
  const classes = useStyles();
  if(isMobile){
    return (
      <Paper elevation={5}
      className={classes.alturaCarrusel2}>
         <Image className={classes.immg} src={props.item.src} width="100%"/>
      </Paper>
    ) 
  }else{
   return (
      <Paper elevation={5}
      className={classes.alturaCarrusel}>
         <Image className={classes.immg} src={props.item.src} width="100%"/>
      </Paper>
    ) 
  }
    
}

Image.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Source of the image
   */
  src: PropTypes.string.isRequired,
  /**
   * Source set for the responsive images
   */
  srcSet: PropTypes.string,
  /**
   * Image title
   */
  alt: PropTypes.string,
  /**
   * Should lazy load the image
   */
  lazy: PropTypes.bool,
};

export default Carrusel;
