import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  Chip,
  Dialog, DialogActions, DialogContent, DialogTitle
} from "@mui/material";
import { Favorite as FavoriteIcon, EmojiPeople as EmojiPeopleIcon, ShoppingCart as ShoppingCartIcon, LocationOn as LocationIcon, Event as EventIcon, AccessTime as TimeIcon ,AvTimerOutlined} from '@mui/icons-material';


import image from '../img/pexels-ann-h-11831173.jpg';
import Map from "../components/Map";

const event = {
    name: "Example Event",
    description: "This is an example event. jkwe wejkhkjwerhk kjwehrkwjhe k wjeh rwk kjwejkrhw e",
    // image: "https://example.com/event-image.jpg",
    startDateTime: new Date("2023-04-01T19:00:00"),
    location: {
      name: "Example Venue",
    },
    capacity: 100,
    tickets: [
      {
        id: 1,
        ticketType: {
          name: "General Admission",
          price: 50,
        },
      },
      {
        id: 2,
        ticketType: {
          name: "VIP",
          price: 100,
        },
      },
    ],
  };

const EventDetailsPage = props => {
  const [open, setOpen] = useState(false);
    const [ticketType, setTicketType] = useState("");
    const [ticketQuantity, setTicketQuantity] = useState(1);
    const [ticketDetails, setTicketDetails] = useState({});
  
    const handleChangeTicketType = (event) => {
      setTicketType(event.target.value);
    };
  
    const handleChangeTicketQuantity = (event) => {
      setTicketQuantity(event.target.value);
    };
  
    const handlePurchase = () => {
      const selectedTicket = event.tickets.find(
        (ticket) => ticket.ticketType.name === ticketType
      );
      const subtotal = selectedTicket.ticketType.price * ticketQuantity;
      const vat = subtotal * 0.15;
      const total = subtotal + vat;
  
      // Update ticket details state
      setTicketDetails({
        eventName: event.name,
        eventDate: event.startDateTime.toLocaleString(),
        ticketType: ticketType,
        ticketPrice: selectedTicket.ticketType.price,
        ticketQuantity: ticketQuantity,
        subtotal: subtotal,
        vat: vat,
        total: total,
      });
  
      // Open cart dialog
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <Box style={{margin:'100px', marginTop:'10px'}}>
      <Grid container spacing={3} >
        <Grid item xs={12} md={4}>
          <img src={image} alt={event.name} style={{ maxWidth: "100%", borderRadius: '12px' }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" >
            {event.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">{event.description}</Typography>
          
          <div style={{marginTop:'10px'}}>
          <Typography variant="body1" style={{fontSize:'1rem', marginTop:'10px'}} color="text.secondary">
          <EventIcon sx={{ fontSize: '1rem', marginRight: '4px',  color: '#04bad2',}} style={{ marginBottom:'-3px' }}/>
            Date & Time: <strong style={{color:'#DB0A00'}}>{event.startDateTime.toLocaleString()}</strong>
          </Typography>
          <Typography variant="body1" style={{fontSize:'1rem', marginTop:'10px'}} color="text.secondary">
         Category: <Chip label="Music"  />
         </Typography>
          <Typography variant="body1" style={{fontSize:'1rem', marginTop:'10px'}} color="text.secondary">
          <EmojiPeopleIcon sx={{ fontSize: '1rem', marginRight: '4px',  color: '#04bad2',}} style={{ marginBottom:'-3px' }}/>
            Capacity: {event.capacity}
          </Typography>
          </div>
      
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            
            <Typography variant="h6" color='#04bad2'>
              Tickets
            </Typography>
            <RadioGroup
              aria-label="ticket-type"
              name="ticket-type"
              value={ticketType}
              onChange={handleChangeTicketType}
            >
              {event.tickets.map((ticket) => (
                <FormControlLabel
                  key={ticket.id}
                  value={ticket.ticketType.name}
                  control={<Radio />}
                  label={`${ticket.ticketType.name} - R${ticket.ticketType.price}`}
                />
              ))}
            </RadioGroup>
            <Select
              value={ticketQuantity}
              onChange={handleChangeTicketQuantity}
              variant="outlined"
              sx={{ ml: 2, minWidth: "100px" }}
            >
              {[...Array(10).keys()].map((num) => (
                <MenuItem key={num + 1} value={num + 1}>
                  {num + 1}
                </MenuItem>
              ))}
            </Select>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePurchase}
              sx={{ mt: 2 }}
              disabled={!ticketType || ticketQuantity < 1}
            >
              Purchase
            </Button>
          </FormControl>
         
        </Grid>
        <Grid item xs={12} md={4}>
<div style={{ height: '200px', width:'100%',borderRadius: '1rem', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'  }}>
        <Map location={event.location} />
        </div>
        <div style={{marginTop:'15px'}}>
        <Typography variant="body2" style={{fontSize:'1rem'}} color="text.secondary">
        <LocationIcon sx={{ fontSize: '1rem', marginRight: '4px',  color: '#04bad2',}} style={{ marginBottom:'-3px' }}/>
             Loaldkl hjsdjh skjhr jkshe
            </Typography>
        </div>
        <div style={{marginTop:'15px'}}>
        <Typography variant="h6" gutterBottom>
              Additional Information
            </Typography>
        </div>
        <div>
        <Typography variant="body2" style={{fontSize:'1rem'}} color="text.secondary">
              Age Restriction: <Chip
  label="+ 18"
 
/>
            </Typography>
            <Typography variant="body2" style={{fontSize:'1rem'}} color="text.secondary">
            Refund Policy: No Refund Policy
            </Typography>
            <Typography variant="body2" style={{fontSize:'1rem'}} color="text.secondary">
            parking Information: No Refund Policy
            </Typography>
            <Typography variant="body2" style={{fontSize:'1rem'}} color="text.secondary">
            Accessibility: <Chip
  label="Yes"
 
/>
            </Typography>
            <Typography variant="body2" style={{fontSize:'1rem'}} color="text.secondary">
            Rules: No Refund Policy
            </Typography>
        </div>
        </Grid>
      </Grid>
    </Box>
     <Dialog open={open} onClose={handleClose}>
     <DialogTitle>
     <Typography variant="h6">Purchase Ticket</Typography>
     </DialogTitle>
     <div style={{margin:'10px'}}>

     
     <DialogContent>
       <Grid container spacing={2}>
         <Grid item xs={12}>
           <Typography variant="h6">{ticketDetails.eventName}</Typography>
           <Typography variant="body1" style={{fontSize:'1rem', marginTop:'10px'}} color="text.secondary">
         
           {event.startDateTime.toLocaleString()}
          </Typography>
         </Grid>
         <Grid item xs={12}>
           <Typography variant="h5">{ticketDetails.ticketType} Ticket</Typography>
           <Typography variant="subtitle1">Quantity: <span style={{color:'#DB0A00'}}>{ticketDetails.ticketQuantity}</span></Typography>
         </Grid>
         <Grid item xs={12}>
          <div style={{}}>
          <Typography variant="subtitle1">{`Price per ticket: ZAR  ${ticketDetails.ticketPrice}`}</Typography>
           <Typography variant="subtitle1">{`Subtotal: ZAR  ${ticketDetails.subtotal}`}</Typography>
           <Typography variant="subtitle1">{`VAT (15%): ZAR ${ticketDetails.vat}`}</Typography>
           <Typography variant="h6" color='#DB0A00' style={{marginTop:'10px'}}><strong>{`Total: ZAR  ${ticketDetails.total}`}</strong></Typography>
          </div>
         
         </Grid>
       </Grid>
     </DialogContent>
     <DialogActions>
       <Button onClick={handleClose}>Close</Button>
       <Button color="primary" variant="contained">
         Checkout
       </Button>
     </DialogActions>
     </div>
   </Dialog>
   </>
    );
};


export default EventDetailsPage;