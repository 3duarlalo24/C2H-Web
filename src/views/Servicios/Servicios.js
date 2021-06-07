import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider, Typography } from '@material-ui/core';
import { Section, SectionAlternate} from 'components/organisms';
import  {Suministros,
    Bombeo
   }from './components'


const useStyles = makeStyles(theme => ({
  root: {},
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  shape: {
    background: theme.palette.alternate.main,
    borderBottomLeftRadius: '50%',
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
}));

const Servicios = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.shape}>
      <Typography variant="h2" align="center" color="initial" data-aos="zoom-in">¡Expertos en concretos de altas resistencias!</Typography>
          <Section className={classes.section}>
              <Suministros />   
          </Section>
          <Section>
              <Bombeo/>
          </Section>
     
      </div>

    </div>
  );
};

export default Servicios;
