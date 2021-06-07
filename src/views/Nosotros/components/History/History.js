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

const History = props => {
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
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <SectionHeader
            title={
              <span>
                Atención, servicio y calidad
              </span>
            }
            subtitle='En la actualidad Concretos2H® se conforma de un equipo de 30 trabajadores en sus diferentes áreas, cuyo profesionalismo, experiencia y dedicación son la clave del éxito de esta empresa.'
            subtitle2='Concretos2H® siempre en busca de una mejora continua, reconoce que su objetivo principal es el de satisfacer las necesidades de sus clientes, ofreciéndoles una amplia gama de concretos elaborados bajo la supervición de profesionales, garantizando la calidad de los mismos, y brindando el mejor servicio, siempre preocupados por exceder las expectativas de sus clientes.'
            align="left"
            disableGutter
            titleVariant="h3"
          />
             
        </Grid>
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
            src="/images/illustrations/calidad.webp"
            alt="historia"
            className={classes.image}
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
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

export default History;
