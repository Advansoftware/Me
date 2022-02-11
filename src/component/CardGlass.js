import { Card, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          backgroundColor: "rgba(0,0,0,.5)",
          borderLeft: "1px solid rgba(255,255,255, .5)",
          borderTop: "1px solid rgba(255,255,255, .5)",
          backdropFilter: "blur(5px)",
          boxShadow: "20px 20px 50px rgba(0,0,0,.5)",
          position: "relative",
          left: "49%",
          top: "20%",
          color: "white",
          paddingLeft: "2rem",
          paddingRight: "2rem"
        }
      }
    }
  }
});
const CardGlass = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card>{children}</Card>
    </ThemeProvider>
  );
};
export default CardGlass;
