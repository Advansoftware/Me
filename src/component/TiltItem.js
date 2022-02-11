import { Container } from "@mui/material";
import Tilt from "react-vanilla-tilt";
// {
//   reverse:           false,  // reverse the tilt direction
//   max:               35,     // max tilt rotation (degrees)
//   perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
//   scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
//   speed:             300,    // Speed of the enter/exit transition
//   transition:        true,   // Set a transition on enter/exit.
//   axis:              null,   // What axis should be disabled. Can be X or Y.
//   reset:             true    // If the tilt effect has to be reset on exit.
//   easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
//   glare:             false   // if it should have a "glare" effect
//   "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
//   "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
//                              // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
// }
// exemple <TiltItem options={{ scale: 2, max: 25 }}>

const TiltItem = ({ children, options }) => {
  return (
    <Container>
      <Tilt
        options={{
          scale: 2,
          max: 25,
          glare: true,
          "max-glare": 1
        }}
        style={{
          fontSize: "1rem",
          width: "90%",
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
          display: "flex"
        }}
      >
        {children}
      </Tilt>
    </Container>
  );
};
export default TiltItem;
