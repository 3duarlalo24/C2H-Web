import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  AppBar,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {},
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBar: {
    backdropFilter: 'blur(10px)',
  },
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  listItem: {
    cursor: 'pointer',
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemText: {
    flex: '0 0 auto',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    color: theme.palette.primary.main
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  iconButton: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  logoContainer: {
    width: 200,
    height: 40,
    [theme.breakpoints.up('md')]: {
      width: 220,
      height: 40,
    },
  },
  logoImage: {
    width: '50%',
    
  },
}));
function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Topbar = props => {
  const { onSidebarOpen, pages, ...rest } = props;

  const classes = useStyles();

  return (
    <ElevationScroll {...props}>
      <AppBar position="sticky" color="transparent" className={classes.appBar}>
        <Toolbar disableGutters className={classes.toolbar} {...rest}>
          <div className={classes.logoContainer}>
            <a href="/" title="deliabarraza">
              <Image
                className={classes.logoImage}
                src="/images/logos/logoh2.svg"
                alt="concretos2h"
                lazy={false}
                
              />
            </a>
          </div>
          <div className={classes.flexGrow} />
          <Hidden smDown>
            <List className={classes.navigationContainer}>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.listItemText}
                  component="a"
                  href="/home"
                >
                  Inicio
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.listItemText}
                  component="a"
                  href="/Nosotros"
                >
                  Nosotros
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.listItemText}
                  component="a"
                  href="/servicios"
                >
                  Servicios
                </Typography>
              </ListItem>
    
              {/* <ListItem className={classes.listItem}>
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  fullWidth
                  component="a"
                  href="/Cotizacion"
                >
                  Cotización
                </Button>
              </ListItem> */}
            </List>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              className={classes.iconButton}
              onClick={onSidebarOpen}
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
};

export default Topbar;
