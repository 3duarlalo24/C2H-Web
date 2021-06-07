import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Paper, Card } from '@material-ui/core';
import { SectionHeader, CustomList } from 'components/molecules';
import datos from "../History/lista.json"
import ReactPlayer from 'react-player'
import { Image } from 'components/atoms';
 

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    borderRadius: theme.spacing(2),
    paddingLeft:'10px',
    paddingRight:'10px',
    margin:'auto'
  },
  lastGrid: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '40%',
    },
  },
  video:{
      marginRight: 'auto',
      marginLeft: 'auto',
  }
}));

const Coop = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up"{...rest}>
      <SectionHeader
        
        title='Alguna vez hemos hecho equipo con...'
        align="center"
      />
        <Grid container  alignItems='center'>
            <Grid item xs={4} sm={2}>
                <Image src="/images/illustrations/s1.png" className={classes.image}/>
            </Grid>
            <Grid xs={4} sm={2}>
                <Image src="/images/illustrations/s2.jpg" className={classes.image}/>
            </Grid>
            <Grid xs={4} sm={2}>
                 <Image src="/images/illustrations/s3.png" className={classes.image}/>
            </Grid>
            <Grid xs={4} sm={2}>
                <Image src="/images/illustrations/s4.png" className={classes.image}/>
            </Grid>
            <Grid xs={4} sm={2}>
                <Image src="/images/illustrations/s5.jpg" className={classes.image}/>
            </Grid>
            <Grid xs={4} sm={2}>
                <Image src="/images/illustrations/s6.jpg" className={classes.image}/>
            </Grid>
            <Grid item xs={4} sm={2}>
                <Image src="/images/illustrations/s7.png" className={classes.image}/>
            </Grid>
            <Grid xs={4} sm={2}>
                <Image src="/images/illustrations/s8.png" className={classes.image}/>
            </Grid>
            <Grid xs={4} sm={2}>
                 <Image src="/images/illustrations/s9.jpg" className={classes.image}/>
            </Grid>
            <Grid xs={4} sm={2}>
                <Image src="/images/illustrations/s10.png" className={classes.image}/>
            </Grid>
            <Grid xs={4} sm={2}>
                <Image src="/images/illustrations/s11.png" className={classes.image}/>
            </Grid>
            <Grid xs={4} sm={2}>
                <Image src="/images/illustrations/s12.png" className={classes.image}/>
            </Grid>
        
        
       
        
        
        
     </Grid>
       
    </div>
    
  );
};

Coop.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Coop;
