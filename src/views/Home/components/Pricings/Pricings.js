import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { Icon, LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardPricingStandard } from 'components/organisms';
import {VerifiedUser, WhatsApp} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {},
  fontWeight900: {
    fontWeight: 900,
  },
}));

const Pricings = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Ponemos a sus ordenes los siguientes servicios"
        // subtitle="Eu enim anim culpa reprehenderit."
        // ctaGroup={[
        //   <LearnMoreLink title="Obtén más detalle" href="#" variant="h6" />,
        // ]}
        // data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <CardPricingStandard
            variant="outlined"
            withShadow
            liftUp
            title="Concretos Normales"
            // priceComponent={
            //   <div>
            //     <Typography
            //       variant="h3"
            //       component="span"
            //       className={classes.fontWeight900}
            //     >
            //       $590
            //     </Typography>
            //   </div>
            // }
            features={[
              'Convencional',
              'Estructural',
              'Resistencia rápida'
            ]}
            featureCheckComponent={
              <VerifiedUser color="primary"/>
            }
            // cta={
            //   <Button
            //     color="primary"
            //     variant="contained"
            //     fullWidth
            //     size="large"
            //   >
            //     Más información&nbsp;&nbsp;
            //     <WhatsAppIcon/>
            //   </Button>
            // }
         /*    disclaimer="Fully featured 30-day free trial" */
          />
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
        <CardPricingStandard
            variant="outlined"
            withShadow
            liftUp
            title="Concretos Ligeros"
            features={[
              'Relleno Fluido',
              'Relleno Ligero',
            ]}
            featureCheckComponent={
              <VerifiedUser color="primary"/>
            }
           />
        </Grid>
      </Grid>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
        <CardPricingStandard
            variant="outlined"
            title="Concretos Especiales"
            liftUp
            // subtitle="Aliquip pariatur mollit quis mollit mollit consectetur proident elit culpa ullamco enim."
            // priceComponent={
            //   <div>
            //     <Typography
            //       variant="h3"
            //       component="span"
            //       className={classes.fontWeight900}
            //     >
            //       $725
            //     </Typography>
            //   </div>
            // }
            features={[
              'Optimo',
              'Autocompactable',
              'Aparente',
              'Baja contracción'
            ]}
            featureCheckComponent={
              <VerifiedUser color="primary" />
            }
            // cta={
            //   <Button color="primary" variant="contained" fullWidth size="large">
            //     Agenda ahora
            //   </Button>
            // }
/*             disclaimer="Fully featured 30-day free trial" */
          />
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <CardPricingStandard
            variant="outlined"
            title="Otros servicios"
            liftUp
            features={[
              'Obra civil',
              'Calles y todo tipo de pisos',
              'Edificación residencial vertical',
              'Edificios corporativos',
              'Terracerías y pavimentación',
              'Carreteras, canchas deportivas',
              'Acabados'
            ]}
            featureCheckComponent={
              <VerifiedUser color="primary" />
            }
            />
        </Grid>
      </Grid>
    </div>
  );
};

Pricings.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Pricings;
