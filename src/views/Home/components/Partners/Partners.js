import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { LearnMoreLink, Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {},
  logo: {
    maxWidth: 75,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    paddingTop: 20,
    marginBottom: -20,
   
  },
  colorCard: {
    backgroundColor: "#1881D4",
  }
}));

const Partners = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <SectionHeader
            title="Ponemos a sus ordenes nuestro servicios..."
            subtitle="Nosotros lo asesoramos para que su construcción tenga la calidad que necesita..."
            align="left"
            ctaGroup={[
              <LearnMoreLink
                title="Ver más detalles"
                href="/Nosotros"
                variant="h6"
              />,
            ]}
            disableGutter
          />
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid item xs={4} key={index}>
                <CardBase withShadow liftUp 
                className={classes.colorCard}
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    className={classes.logo}
                    lazy={false}
                  />
                  <h4 className={classes.name}> {item.name}</h4>
                </CardBase>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Partners;
