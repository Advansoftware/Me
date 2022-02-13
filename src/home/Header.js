import { Container, Grid } from '@mui/material';
import styled from 'styled-components';
import imgheader from '../assets/header.jpg';
import avatar from '../assets/avatar.jpg';
import ButtonGlass from '../component/ButtonGlass';
const Header = () =>{
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
`;
const ImageAvatar = styled.img`
    max-width: 15rem;
    border-radius: 50%;
    border: 10px solid rgba(255,255,255, .3);
    box-shadow: 0px 0px 50px rgb(197 40 40 / 50%);
`;
    return(
        <HeaderHome>
            <Container>
                <Grid 
                    container 
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