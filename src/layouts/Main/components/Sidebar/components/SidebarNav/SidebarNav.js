/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Button
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  listItemLink: {
    textDecoration: 'none',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  divider: {
    width: '100%',
  },
}));

const SidebarNav = props => {
  const { pages, onClose, className, ...rest } = props;
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography
          variant="h6"
          color="primary"
          component="a"
          href="/home"
          className={classes.listItemLink}
        >
          Inicio
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography
          variant="h6"
          color="primary"
          className={classes.listItemLink}
          component="a"
          href="/Nosotros"
        >
          Nosotros
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography
          variant="h6"
          color="primary"
          className={classes.listItemLink}
          component="a"
          href="/Servicios"
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
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
