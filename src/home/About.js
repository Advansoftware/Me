import styled, { keyframes } from 'styled-components';
import fundo from '../assets/about.webp';
import logo from "../assets/logo.webp"
const About = () => {

        const neon = keyframes`
      0% {
        box-shadow: 0 0 10px #010b26;
      }
      50% {
        box-shadow: 0 0 100px rgba(197, 40, 40, .5);
      }
      100% {
        box-shadow: 0 0 10px #010b26;
      }
    `;
    const Logo = styled.div`
    background-image: url("${logo}");
    background-size: 100% 100%;
    width: 200px;
    height: 150px;
    position: absolute;
    top: -75px;
    left: calc(50% - 200px/2);
    
`;
    const ContainerItems = styled.div`
        display: flex;
        position: relative;
        height: 90vh;
        background-image: url("${fundo}");
        background-repeat: no-repeat;
        background-size: cover;
        animation: ${neon} 5s alternate infinite ease-in-out;
        border-top: 2px solid #010b26;
    `;
    return(
        <>
    <ContainerItems>
        <Logo />
      </ContainerItems>
        </>
    );
}
export default About;