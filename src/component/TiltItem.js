import { Container } from "@mui/material";
import Tilt from "react-parallax-tilt";

const TiltItem = ({ children, options }) => {
  return (
    <Container>
      <Tilt
      style={{
            fontSize: "1rem",
            backgroundColor: "rgba(0,0,0,.5)",
            borderLeft: "1px solid rgba(255,255,255, .5)",
            borderTop: "1px solid rgba(255,255,255, .5)",
            backdropFilter: "blur(5px)",
            boxShadow: "20px 20px 50px rgba(0,0,0,.5)",
            color: "white",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingTop: "3rem",
            paddingBottom: "3rem",
            borderRadius: "5px",
          }}
       glareEnable={true}
       tiltReverse={true}
       glareMaxOpacity={0.8} 
       glareColor="white"
       glarePosition="all"
      >
         {children}
      </Tilt>
    </Container>
  );
};
export default TiltItem;
