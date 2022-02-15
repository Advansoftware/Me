import { createTheme, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import Home from "./home/Home";
import "./index.css";
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function App(props) {
  const { appServiceWorker } = props;
    appServiceWorker.onInstalled(() => this.setState({ showInstalledMessage: true }))
    appServiceWorker.onUpdateFound(() => this.setState({ showUpdateMessage: true }))
  return (
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}
        ><Home />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
