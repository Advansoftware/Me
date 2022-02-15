import { Container, Grid } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import imgheader from '../assets/header.jpg';
import avatar from '../assets/avatar.jpg';
import ButtonGlass from '../component/ButtonGlass';
const Header = () =>{
    const neon = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(197, 40, 40, .5);
  }

  50% {
    box-shadow: 0 0 15px  rgba(1, 11, 38, .5);
  }
  100% {
    box-shadow: 0 0 10px rgba(197, 40, 40, .5);
  }
`;
const neonContent = keyframes`
0% {
    box-shadow: 0 0 10px #010b26 inset;
  }
  50% {
    box-shadow: 0 0 100px rgba(197, 40, 40, .5) inset;
  }
  100% {
    box-shadow: 0 0 10px #010b26 inset;
  }
`;
const HeaderHome = styled.div`
    position: relative;
    background-image: url('${imgheader}');
    background-repeat: no-repeat;
    background-size: cover;
    widht: 100%;
    height: 100vh;
    margin: 0;
    display: flex;
    align-items: center;
    animation: ${neonContent} 5s alternate infinite ease-in-out;
`;
const ImageAvatar = styled.img`
    max-width: 15rem;
    border-radius: 50%;
    border: 10px solid rgba(255,255,255, .3);
    animation: ${neon} 2s alternate infinite ease-in-out;
`;


    return(
        <HeaderHome>
            <Container>
                <Grid 
                    container 
                    direction={{xs:"column-reverse", md: 'row'}}
                    justifyContent="space-between"
                    spacing={3}
                    alignContent="center"
                    alignItems="center"
                    align="center"
                >
                    <Grid item xs={12} sm={6}>
                        <ButtonGlass>
                            Saiba Mais
                        </ButtonGlass>
                    </Grid>
                    <Grid item xs={12} sm={6}>   
                        <ImageAvatar src={avatar}/>
                    </Grid>
                </Grid>
            </Container>
        </HeaderHome>
    );
};
export default Header;