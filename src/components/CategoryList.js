import React from 'react';
import { Box, Typography , Badge, IconButton} from '@mui/material';
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon
} from '@mui/icons-material';

// const categories = ['Concerts', 'Sports', 'Arts', 'Comedy', 'Family', 'Festivals', 'Food & Drink', 'Nightlife'];

const categories = [
  {
  name: 'Concerts',
  count: 20,
  imageUrl: 'https://example.com/concerts.jpg'
  },
  {
  name: 'Sports',
  count: 15,
  imageUrl: 'https://example.com/sports.jpg'
  },
  {
  name: 'Arts',
  count: 10,
  imageUrl: 'https://example.com/arts.jpg'
  },
  {
  name: 'Comedy',
  count: 8,
  imageUrl: 'https://example.com/comedy.jpg'
  },
  {
  name: 'Family',
  count: 5,
  imageUrl: 'https://example.com/family.jpg'
  },
  {
  name: 'Festivals',
  count: 12,
  imageUrl: 'https://example.com/festivals.jpg'
  },
  {
  name: 'Food & Drink',
  count: 18,
  imageUrl: 'https://example.com/food.jpg'
  },
  {
  name: 'Nightlife',
  count: 7,
  imageUrl: 'https://example.com/nightlife.jpg'
  }
  ];


const CategoryList = props => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', overflowX: 'auto' }}>
      {categories.map((category) => (
        
       <IconButton color="default" sx={{  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.25)' }} style={{  display: 'flex',
       alignItems: 'center',
       gap:'12px'}}>
       <AccountCircleIcon />
     </IconButton>
      ))}
      </Box>
    );
};

export default CategoryList;