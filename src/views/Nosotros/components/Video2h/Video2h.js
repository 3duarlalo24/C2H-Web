import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Divider } from '@material-ui/core';
import { SectionHeader, CustomList } from 'components/molecules';
import datos from "../History/lista.json"
import ReactPlayer from 'react-player'
import { SliderWrapper } from 'react-slider-wrapper';
 

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
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

const Video2h = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up"{...rest}>
      <SectionHeader
        
        title='Resolvemos hasta donde los demás dicen "no se puede"...'
        align="center"
      />
      
        <Grid container item xs={12} sm={12} alignItems='center' >
           
            <ReactPlayer url="https://www.youtube.com/watch?v=DVXF4H-ABDc&t=30s" className={classes.video} playing="true"/>
        </Grid>
       
    </div>
    
  );
};

Video2h.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Video2h;
