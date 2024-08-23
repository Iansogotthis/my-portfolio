import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#333',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#444',
    },
    body1: {
      fontSize: '1rem',
      color: '#555',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
});

export default theme;
