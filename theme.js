import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A2239',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Lato', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    // fontSize: 16, // Default base font size (for body text, equivalent to `body1`)
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export default theme;
