import styled from 'styled-components';
import backImage from '../../assets/Spider-Man-Home-Aranha.jpg'

export const BannerContainer = styled.section`
-webkit-mask-image: -webkit-gradient(linear, left 70%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
position: absolute;
    /* background-color: orange; */
    background-image: url(${backImage});
    background-size: cover;
    width: 100%;
    height: 56vw;
    margin: 0;
    z-index: 0;
`;

export const BannerMaskBlack = styled.div`
/* -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)); */
/* mask-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)); */
background: linear-gradient(90deg, rgba(0,0,0,.9) 0%, rgba(0,0,0,.85) 35%, rgba(0,0,0,0) 100%);
position: relative;
top: 0;
left: 0;
width: 70%;
height: 56vw;
z-index: 1;
`;