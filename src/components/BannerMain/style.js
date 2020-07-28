import styled from 'styled-components';
import backImage from '../../assets/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg'

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

export const BannerMainDescription = styled.article`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
top: 0;
left: 0;
width: 44vw;
height: 50vw;
/* border: 1px solid red; */
`;

BannerMainDescription.Logo = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
width: 35vw;
height: 150px;
margin: 35px 0px 15px 0px;
/* border: 1px solid green; */
& img{
    max-width: 100%;
    max-height: 100%;
}
`;
BannerMainDescription.Info = styled.div`
color: var(--grayLight);
width: 35vw;
margin-bottom: 7px;
font-size: 1.2vw;

/* border: 1px solid green; */
@media screen and (max-width: 1024px) {
    font-size: 1.5vw;
}
& > *{
  margin: 0px 12px;
}& :first-child {
  margin-left: 0px;
}
`;
BannerMainDescription.Texto = styled.div`
color: var(--blackLighter);
width: 35vw;
margin-bottom: 7px;

font-weight: 300;
font-size: 1.1vw;


/* border: 1px solid green; */
    @media (max-width: 1024px) {
       font-size: 1.5vw;
     }
`;
BannerMainDescription.ButtonsNav = styled.div`
display: flex;
margin-bottom: 7px; 
`;

export const WatchButton = styled.a`
  box-sizing: border-box;
  cursor: pointer;
  padding: 4px 20px 4px 16px;

  outline: none;
  border-radius: 4px;
  
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  color: var(--black);
  background: var(--white);
  /* border-color: var(--black); */
  transition: opacity .3s;
  /* margin: 0 auto; */
  margin: 10px 8px;
  @media (max-width: 800px) {
    display: block;
      font-size: 1.6vw;
  }
`;

export const PlayButton = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4vw;
  text-decoration: none;
  margin-left: 8px;
`;

export const ContentRating = styled.span`
font-family: 'Oswald', sans-serif;
padding: 2px 4px;
background-color: var(--orange);
border-radius: 3px;
color: black;
font-weight: 900;
`;

export const LaunchDate = styled.span`
color: var(--green);
`;