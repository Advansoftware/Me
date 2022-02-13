import { Button, createTheme, ThemeProvider } from "@mui/material";
import './ButtonGlassModule.css';
const ButtonGlass = ({ children, onClick }) => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "1rem",
            backgroundColor: "rgba(0,0,0,.3)",
            borderLeft: "1px solid rgba(255,255,255, .5)",
            borderTop: "1px solid rgba(255,255,255, .5)",
            backdropFilter: "blur(5px)",
            boxShadow: "20px 20px 50px rgba(0,0,0,.5)",
            position: "relative",
            color: "white",
            paddingLeft: "2rem",
            paddingRight: "2rem"
          }
        }
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={onClick} className="btn">{children}</Button>
    </ThemeProvider>
  );
};
export default ButtonGlass;
