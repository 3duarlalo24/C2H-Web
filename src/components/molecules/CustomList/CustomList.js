import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core/'
import Grid from '@material-ui/core/Grid'
import DoneIcon from '@material-ui/icons/Done';


const CustomList = props => {
  const dd = props.Datos[0].items[0].items
  return (
    <Grid data-aos="zoom-in">
      <List>
          {dd.map((obj, index) => {
      return (
        <ListItem key={index}>
          <ListItemIcon>
              <DoneIcon />
          </ListItemIcon>
          <ListItemText>
              {obj.label}   
          </ListItemText>
      </ListItem>
      )
    })} 
      </List>
    </Grid>
  )
}

export default CustomList;
