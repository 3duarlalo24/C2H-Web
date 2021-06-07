import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { SectionHeader, CustomList } from 'components/molecules';
import datos from "../History/lista.json"

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
}));

const Achievements = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        
        title="UNA HISTORIA DE GRANDES LOGROS"
        align="center"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={12}>
          <Grid 
            container 
            alignItems="center"
          >
              <CustomList Datos={datos} />
          </Grid>

        </Grid>
        
      </Grid>
    </div>
  );
};

Achievements.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Achievements;
