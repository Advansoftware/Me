import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const  BottomNav = () => {
  const [value, setValue] = useState(0);
  const theme = createTheme({
    components: {
      MuiBottomNavigation: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(0,0,0,.3)",
            borderTop: "1px solid rgba(255,255,255, .3)",
            backdropFilter: "blur(5px)",
            boxShadow: "0px 0px 50px rgba(0,0,0,.5)",
          }
        }
      },
      MuiBottomNavigationAction:{
        styleOverrides:{
          root: {
            color: 'white',
            border: "1px solid rgba(255,255,255, .1)",
          }
        }
      }
    }
  });
  return (
    <ThemeProvider theme={theme} >
    <Box fullWidth sx={{ position: 'fixed', bottom: 0, width: '100%', display: {xs: 'block', md:'none'}}}>
      <BottomNavigation
        sx={{linkColor: 'white'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Início" icon={<HomeIcon />} />
        <BottomNavigationAction label="Sobre" icon={<InfoIcon />} />
        <BottomNavigationAction label="Projetos" icon={<WorkIcon />} />
        <BottomNavigationAction label="Contato" icon={<PermContactCalendarIcon />} />
      </BottomNavigation>
    </Box>
    </ThemeProvider>
  );
}
export default BottomNav;