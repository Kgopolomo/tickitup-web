import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';

const ticketDetails = {
    eventName: "Dummy Event",
    eventDate: new Date("2023-04-01T19:00:00"),
    ticketType: "General Admission",
    ticketPrice: 25.99,
    ticketQuantity: 2,
    subtotal: 51.98,
    vat: 5.20,
    total: 57.18,
  };

const Checkout = props => {

    const [cardNumber, setCardNumber] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [cardHolderName, setCardHolderName] = React.useState('');
  
  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };
  
  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };
  
  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };
  
  const handleCardHolderNameChange = (event) => {
    setCardHolderName(event.target.value);
  };
  
  const handlePaymentSubmit = () => {
    // TODO: Submit payment to Yoco API
  };

    return (
        <div style={{margin:'100px', marginTop:'10px', }}>


             <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
      <Typography variant="h5" gutterBottom>
          Cart Information
        </Typography>
      <div style={{backgroundColor:'#C5C5C5', width:'100%', height:'100%', borderRadius: '0.5rem'}}>
<div style={{padding:'15px'}}>


<Grid container spacing={2}>
         <Grid item xs={12}>
           <Typography variant="h6">{ticketDetails.eventName}</Typography>
           <Typography variant="body1" style={{fontSize:'1rem', marginTop:'10px'}} color="text.secondary">
         
           {ticketDetails.eventDate.toLocaleString()}
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

</div>
            </div>
    
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom>
          Payment Information
        </Typography>
        <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Card Number"
          variant="outlined"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Expiry Date"
          variant="outlined"
          value={expiryDate}
          onChange={handleExpiryDateChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="CVV"
          variant="outlined"
          value={cvv}
          onChange={handleCvvChange}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Cardholder Name"
          variant="outlined"
          value={cardHolderName}
          onChange-={handleCvvChange}
          />
      </Grid>


</Grid>
</Grid>
	 </Grid>
        </div>
    );
};


export default Checkout;