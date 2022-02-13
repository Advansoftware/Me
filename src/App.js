import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./home/Home";
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});
function App() {
  
  return (
  <ThemeProvider theme={darkTheme}
    ><Home />
  </ThemeProvider>);
}

export default App;
