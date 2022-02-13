import { createTheme, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
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
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}
        ><Home />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
