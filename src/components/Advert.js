import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const eventDetails = {
    title: 'Example Event',
    date: '2023-05-15',
    time: '2:00 PM',
    location: '123 Main St, Anytown, USA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    image: 'https://picsum.photos/400/400',
    video: 'https://www.youtube.com/watch?v=ntAjFOdh-WY',
    price: '$50'
};

const EventDetails = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>{eventDetails.title}</Typography>
            <Typography variant="subtitle1" gutterBottom>{eventDetails.date} at {eventDetails.time}</Typography>
            <Typography variant="subtitle1" gutterBottom>{eventDetails.location}</Typography>
            <Typography variant="body1" gutterBottom>{eventDetails.description}</Typography>
            <Typography variant="h6" gutterBottom>{eventDetails.price}</Typography>
        </Box>
    );
};
const EventVideo = () => {
    return (
        <Box>
 <iframe
  width="100%"
  height="500"
  src={eventDetails.video}
  title={eventDetails.title}
  frameBorder="0"
  allowFullScreen
  style={{ borderRadius: '0.5rem', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
></iframe>
        </Box>
    );
};
const Advert = props => {
    return (
        <Grid container>
        <Grid item xs={12} md={4}>
            {/* left column */}
            <Box p={4}>
            <EventDetails />
            </Box>
        </Grid>
        <Grid item xs={12} md={8}>
            {/* right column */}
            <Box p={4}>
            <EventVideo />
            </Box>
           
        </Grid>
    </Grid>
    );
};


export default Advert;