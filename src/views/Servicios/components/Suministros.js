import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import typography from 'theme/typography';

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
}));

const Suministros = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={4}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="/images/illustrations/camion.png"
            alt="historia"
            className={classes.image}
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <SectionHeader
            title={
              <span>
                Suministro de concreto
              </span>
            }
            subtitle='Contamos con camiones revolvedores operados por personal altamente capacitados, y con características que ayudan a que su producto llegue a su obra con la mejor calidad posible.'
            subtitle2='Nuestros equipos se encuentran en supervisión constante, con el objetivo de brindarle seguridad y confianza en los tiempos y forma que solicite su producto.'
            align="left"
            disableGutter
            titleVariant="h3"
          />
             
        </Grid>

      </Grid>
    </div>
  );
};

History.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Suministros;
