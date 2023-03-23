import { createTheme } from '@mui/material/styles';

const theme = createTheme({


   
 
  palette: {
    primary: {
        main: '#333',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#fff',
      },
    },
    typography: {
      fontFamily: 'Roboto',
    },
    shape: {
      borderRadius: 4,
    },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  transitions: {
    create: () => 'all 0.3s ease',
  },
});

export default theme;