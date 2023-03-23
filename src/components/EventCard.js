import React, { useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography, Box ,Button, Tooltip} from '@mui/material';
import { Favorite as FavoriteIcon, ShoppingCart as ShoppingCartIcon, LocationOn as LocationIcon, AccessTime as TimeIcon ,AvTimerOutlined} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import image from '../img/pexels-ann-h-11831173.jpg'

const address = 'See, 588  Skjlfksdf Strie';
const desc = 'we going the jahd  ksdf skjsdf kjhsdf daasdasd askjasd aksjdasd';
const title = 'The night to the room';

const EventCard = ({ event }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [numTickets, setNumTickets] = useState(10);
    const [eventStatus, setEventStatus] = useState('On Sale');
  
    const handleAddToWishlist = () => {
      setIsFavorite(!true);
    };
  
    const handleAddToCart = () => {
      if (numTickets === 0) {
        setEventStatus('Sold Out');
        return;
      }
      setNumTickets(numTickets - 1);
    };

  return (
    <Card sx={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }} style={{width:'20rem', height:'16rem'}}>
        <div style={{backgroundColor:'#DB0A00', width:'70px', height:'20px',margin:'10px', position: 'absolute', zIndex: '9999',  borderRadius: '0.25rem',boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.25)'}}>
        <Typography variant="body2" style={{display:'flex', justifyContent:'center', alignItems:'center'}} color="white"><strong>20 DEC</strong></Typography>
        </div>
      <CardActionArea component={Link} to={`/events/1`} sx={{ padding: 0 }}>
      <CardMedia component="img" height="140" image={image} sx={{ borderRadius: '12px 12px 0 0', position: 'relative' }}>


</CardMedia>
      </CardActionArea>
      <CardContent sx={{ padding: '16px 24px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <Tooltip title={title} arrow>
            <Typography gutterBottom variant="h7" component="div">
              <strong>Love in the Air
              {title.length > 10 ? title.substring(0,10)+ "...": title}
              </strong>
            </Typography>
            </Tooltip>
            <Typography variant="body2" style={{fontSize:'0.8rem'}} color="text.secondary">
            {desc.length > 30 ? desc.substring(0,30)+ "...": desc}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          
            <Typography variant="body2" style={{fontSize:'0.8rem'}} color="text.secondary">
            <Tooltip title={address}  arrow>
              <LocationIcon sx={{ fontSize: '1rem', marginRight: '4px',  color: '#04bad2',}} style={{ marginBottom:'-3px' }}/>
              </Tooltip>
              {address.length > 15 ? address.substring(0,15)+ "...": address}
             
            </Typography>
           
            <Typography variant="body2" style={{fontSize:'0.8rem'}} color="text.secondary">
              <TimeIcon sx={{ fontSize: '1rem', marginRight: '4px',   color: '#04bad2',}} style={{ marginBottom:'-3px' }}/>
              6:00 PM
            </Typography>
            <Typography variant="h3" style={{fontSize:'1rem', marginTop:'15px'}} color="text.secondary">
              
              Ticket: <span style={{color:'#DB0A00'}}>ZAR 125</span>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EventCard;