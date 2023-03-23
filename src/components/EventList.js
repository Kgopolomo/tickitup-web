import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EventCard from './EventCard';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      overflowX: 'auto',
      backgroundColor: 'white',
  
      padding: '10px',
      scrollbarWidth: 'none', /* hide scrollbar on Firefox */
      '-ms-overflow-style': 'none', /* hide scrollbar on IE and Edge */
      '&::-webkit-scrollbar': {
        display: 'none', /* hide scrollbar on Chrome, Safari, and Opera */
      },
    },
    list:{
        display: 'flex',
        alignItems: 'center',
        gap:'15px'
    },
    listItem: {
      minWidth: '80px',
    },
    button: {
      borderRadius: '50%',
      minWidth: 'unset',
      width: '48px',
      height: '48px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      marginLeft: '10px',
      marginRight: '10px',
    },
  }));
const EventList = props => {
 
      const classes = useStyles();
      const [scrollPosition, setScrollPosition] = useState(0);

      const handleLeftButtonClick = () => {
        const newPosition = scrollPosition - 200;
        setScrollPosition(newPosition < 0 ? 0 : newPosition);
      };
    
      const handleRightButtonClick = () => {
        const newPosition = scrollPosition + 200;
        setScrollPosition(
          newPosition > window.innerWidth - 300
            ? window.innerWidth - 300
            : newPosition
        );
      };

  return (
    <div className={classes.root}>
 
    <List id="flatlist" className={classes.list} disablePadding>
      {/* {items.map((item) => (
        <ListItem key={item} className={classes.listItem}>
          <ListItemText primary={item} />
        </ListItem>
      ))} */}

      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </List>

  </div>
  );
};

export default EventList;