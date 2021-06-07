/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  Button,
  IconButton,
  debounce,
  TextField
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { DeleteForeverOutlined, SearchOutlined, WhatsApp } from '@material-ui/icons';
import useMeasure from 'react-use-measure'
import { Autocomplete } from '@material-ui/lab';
import PaypalButton from '../PaypalButton';

const useStyles = makeStyles(theme => ({
  root: {
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    overFlowX: 'hidden'
  },
  listItemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 'calc(100% + 50px)',
    transitionDuration: 200,
    "&:hover": {
      width: '100%'
    }
  },
  listItemSelected: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  divider: {
    width: '100%',
  },
  input: {
    backgroundColor: 'rgba(200,200,200,0.0)',
    borderRadius: 10,
    border: `solid 0.5px rgba(200,200,200,0.2)`,
    padding: 8,
    transitionDuration: 200,
    "&:focus,&:hover": {
      backgroundColor: 'rgba(255,255,255,1)',
      border: `solid 1px ${theme.palette.primary.main}`,
      boxShadow: '0px 4px 8px rgba(100,100,100,0.5)',
    }
  },
  button: {
    backgroundColor: 'rgba(200,200,200,0.0)',
    borderRadius: 10,
    border: `solid 0.5px rgba(200,200,200,0.2)`,
    padding: 8,
    transitionDuration: 200,
    "&:focus,&:hover": {
      backgroundColor: 'rgba(255,255,255,1)',
      border: `solid 1px ${theme.palette.primary.main}`,
      boxShadow: '0px 4px 8px rgba(100,100,100,0.5)',
    }
  },
  startAdornment: {
    marginRight: 8,
    color: 'gray'
  },
  shoppingCartIcon: {
    float: 'right',
  }
}));

const SidebarNav = props => {
  const { pages, onClose, className, ...rest } = props;
  const classes = useStyles();
  const [options, setoptions] = useState([]);
  const [total, setTotal] = useState(0);
  const [link, setLink] = useState('');
  const [optionsSelected, setoptionsSelected] = useState([]);
  const [ref, { width }] = useMeasure();
  const [anchorEl, setAnchorEl] = useState(null);
  const [focus, setFocus] = useState(false);
  const handleCloseOptions = () => {
    setAnchorEl(null);
  }
  useEffect(() => {
    let amount = 0;
    let text = '👩🏻‍🔬 ¡Hola Delia!%0AMi pedido con el folio: 43542-06:%0A'
    optionsSelected.map((option) => {
      amount = amount + option.precio;
      text = `${text}${option.nombre}%0A`
    });
    text = `${text}Total: ${total}`
    setTotal(amount)
    if (total === 0) {
      text = '👩🏻‍🔬 ¡Hola Delia!%0AMi folio de registro es: 43542-06:%0A'
    }
    setLink(`https://api.whatsapp.com/send?phone=526672003438&text=${text}`)


  }, [optionsSelected])
  const searchStudios = debounce((searchTex) => {
    fetch(`https://delia-barraza.metecsis.app/v1/lab/estudios?estudio=${searchTex}`)
      .then(res => res.json())
      .then(
        (result) => {
          setoptions(result);
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setoptions([]);
        }
      )
  }, 500);
  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem divider className={classes.listItem}>
        <Typography
          variant="h6"
          color="primary"
          className={classes.listItemLink}
        >
          Cuenta
        </Typography>
        <IconButton size='small' className={classes.closeIcon} onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </ListItem>
      <ListItem className={classes.listItem}>
      </ListItem>
      <ListItem divider className={classes.listItem}>
        <Autocomplete
          id="disabled-options-demo"
          options={options}
          fullWidth
          autoSelect
          getOptionDisabled={(option) => optionsSelected.includes(option)}
          getOptionLabel={(option) => option.nombre}
          noOptionsText='Sin resultados'
          multiple
          renderOption={(option) => {
            return (
              <div onClick={() => setoptionsSelected([option, ...optionsSelected])}>
                <Typography>
                  {option.nombre}
                </Typography>
              </div>
            )
          }}
          renderInput={(params) => (
            <TextField
              placeholder='Buscar estudios...'

              onChange={(e) => {
                searchStudios(e.target.value)
              }}
              {...params}

              InputProps={{ ...params.InputProps, className: classes.input, disableUnderline: true, startAdornment: <SearchOutlined /> }}
            />
          )}
        />
      </ListItem>
      {
        optionsSelected.map((item, index) => {
          console.log('item, item', item)
          return (
            <ListItem key={index} className={classes.listItemContainer}>
              <Typography variant='inherit' style={{ width: 'calc(100% - 50px)' }}>
                {`- ${item.nombre}`}
              </Typography>
              <Typography variant='inherit' style={{ width: 'calc(100% - 50px)' }}>
                {`$ ${item.precio}`}
              </Typography>
              <IconButton onClick={() => setoptionsSelected(optionsSelected.filter(e => e !== item))} size='small' style={{ position: 'absolute', top: 8, right: 8 }}>
                <DeleteForeverOutlined />
              </IconButton>
            </ListItem>
          )
        })
      }
      <ListItem className={classes.listItem}>
        <Typography variant='h6' style={{ width: '100%', textAlign: 'right', borderTop: '2px solid gray' }}>
          {`Total: $${total}`}
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          size="large"
          endIcon={<WhatsApp />}
          variant='outlined'
          color="primary"
          fullWidth
          target='_blank'
          className={className.button}
          component="a"
          href={link}
        >
          Enviar WhatsApp
        </Button>
      </ListItem>
      {
        total ?
        <ListItem className={classes.listItem}>
          <PaypalButton total={total} />
        </ListItem>:
        null
      }
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
