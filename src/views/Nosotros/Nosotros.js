import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate} from 'components/organisms';
import  {
   History,
   Achievements,
   Coop,
    Video2h}from './components'



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

const Nosotros = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.shape}>
         <Section className={classes.section}>
        <History />
      </Section>
      </div>
     
      <SectionAlternate>
        <Video2h />
        {/* <Achievements /> */}
      </SectionAlternate>
      <Section>
        <Coop/>
      </Section>
    </div>
  );
};

export default Nosotros;
