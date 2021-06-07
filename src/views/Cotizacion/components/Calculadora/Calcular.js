import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs, Tab, Typography, Box, TextField, Grid, InputLabel, 
        MenuItem, FormControl, Select ,Button } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  caja1:{
      width: 80,
      marginLeft: 10,
      marginTop: 10
  },
  caja2:{
      width: 80,
      marginLeft: 10,
      marginTop: 10
  }
}));

export default function Calcular() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [medida, setMedida] = React.useState('');
  const [medida2, setMedida2] = React.useState('');
  const [medida3, setMedida3] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChangeB = (event) => {
    setMedida(event.target.value);
  };
  const handleChangeC = (event) => {
    setMedida2(event.target.value);
  };
  const handleChangeD = (event) => {
    setMedida3(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Grid container>
            <Grid xs={4} sm={4}>
                <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Cuadrado" {...a11yProps(0)} />
                <Tab label="Triangulo" {...a11yProps(1)} />
                <Tab label="Circulo" {...a11yProps(2)} />
                </Tabs>
            </Grid>

            <TabPanel value={value} index={0}>

            <Grid xs={4} sm={4}>
                <TextField variant="outlined" label="ancho" className={classes.caja1}>
                </TextField>

                <FormControl className={classes.formControl} >
                    <Select
                    variant="outlined"
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={medida}
                    onChange={handleChangeB}
                    className={classes.caja2} 
                    >
                        <MenuItem value='m'>m</MenuItem>
                        <MenuItem value='cm'>cm</MenuItem>
                        <MenuItem value='mm'>mm</MenuItem>
                        <MenuItem value='yardas'>yardas</MenuItem>
                        <MenuItem value='pies'>pies</MenuItem>
                        <MenuItem value='pulgadas'>pulgadas</MenuItem>
                    </Select>
                </FormControl>    
            </Grid>
            <Grid xs={4} sm={4}>
                123
            </Grid>
            
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Grid>
 
    </div>
  );
}