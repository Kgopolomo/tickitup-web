import React from 'react';

import { Typography } from '@mui/material';

import CategoryList from '../components/CategoryList';
import EventCard from '../components/EventCard';
import EventList from '../components/EventList';
import Advert from '../components/Advert';
import EventMap from '../components/EventMap';

const HomePage = props => {
    return (
        <div style={{margin:'100px', marginTop:'10px'}}>
            <EventList />
            <Advert />
            <div>
            
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <Typography variant="h4" gutterBottom>
                        Events Near you
                    </Typography>
                </div>
                <EventMap />
            </div>


        </div>
    );
};


export default HomePage;