import styled from 'styled-components';
import backImage from '../../assets/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg'

export const BannerContainer = styled.section`
-webkit-mask-image: -webkit-gradient(linear, left 70%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
    /* border: 1px solid orange; */
    position: absolute;
    z-index: 0;
    background-image: url(${backImage});
    background-size: cover;
    width: 100%;
    height: 60vw;
    margin: 0;
`;

export const BannerMaskBlack = styled.div`
background: linear-gradient(90deg, rgba(0,0,0,.9) 0%, rgba(0,0,0,.85) 35%, rgba(0,0,0,0) 100%);
/* border: 1px solid blue; */
position: static;
z-index: 1;
width: 70%;
height: 60vw;
`;

export const BannerMainDescription = styled.article`
/* border: 1px solid red; */
position: static;
z-index: 2;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 44vw;
height: 50vw;
`;

BannerMainDescription.Logo = styled.div`
/* border: 1px solid green; */
display: flex;
justify-content: center;
align-items: flex-end;
width: 35vw;
height: 150px;
margin: 35px 0px 15px 0px;
& img{
    max-width: 100%;
    max-height: 100%;
}
`;
BannerMainDescription.Info = styled.div`
/* border: 1px solid green; */
color: var(--grayLight);
width: 35vw;
margin-bottom: 7px;
font-size: 1.2vw;
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
/* border: 1px solid green; */
color: var(--blackLighter);
width: 35vw;
margin-bottom: 7px;

font-weight: 300;
font-size: 1.1vw;

    @media (max-width: 1024px) {
       font-size: 1.5vw;
     }
`;
BannerMainDescription.ButtonsNav = styled.div`
/* border: 1px solid green; */
display: flex;
`;

export const WatchButton = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  padding: 4px 20px 4px 16px;

  outline: none;
  border-radius: 4px;
  
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  background: var(--white);
  transition: opacity .5s;
  margin: 10px 8px;

  /* FONT */
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4vw;
  text-decoration: none;

  @media (max-width: 800px) {
      font-size: 1.6vw;
      & :first-child {
      display: none;
      padding: 4px 20px;
    }
  }
  & :first-child{
    margin: auto 5px auto 0;
  }
`;

export const TextButton = styled.div`
margin: auto;
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