import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: '#3251C3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FE5F55',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    body1B: {
      ...baseTheme.typography.body1,
      fontSize: '20px',
    },
    body2B: {
      ...baseTheme.typography.body2,
      fontSize: '13px',
      letterSpacing: '-0.2px',
      color: 'rgba(22, 28, 45, 0.7)'
    },
    body3: {
      ...baseTheme.typography.body2,
      fontSize: '15px',
      letterSpacing: '-0.2px',
      lineHeight: '32px',
      color: 'rgba(22, 28, 45, 0.7)'
    },
    body4: {
      ...baseTheme.typography.body1,
      color: 'rgba(22, 28, 45, 0.7)',
      fontSize: '17px',
      letterSpacing: '-0.2px',
      lineHeight: '32px',
    },
    h4: {
      fontWeight: '700',
      letterSpacing: '-1.5px'
    },
    h5: {
      fontWeight: '700',
      letterSpacing: '-1.5px',
      fontSize: '2rem',
    },
    h6: {
      fontWeight: '700',
      letterSpacing: '-1.5px',
      fontSize: '1.5rem',
    },
    subtitle1B: {
      ...baseTheme.typography.subtitle1,
      fontWeight: '700',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          // When the label is active, use the secondary color.
          '&.Mui-active': {
            color: '#FE5F55'
          }
        },
      }
    }
  }
});

export default theme;
