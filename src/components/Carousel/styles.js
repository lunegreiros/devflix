import styled from 'styled-components';

export const Title = styled.h3`
  color: var(--grayLight);
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3vw;
  line-height: 1;

  line-height: 1;
  margin: 8px 0px;
  display: inline-block;

  @media (max-width: 800px) {
    font-size: 1.6vw;
  }
`;

export const ExtraLink = styled.a`
  color: var(--blackLighter);
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1.1vw;
  margin-left: 16px;
  text-decoration: none;
  transition: color .3s;
  &:hover,
  &:focus {
    /* opacity: .5; */
    color: white;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 9vw;
  margin-left: 5%;
  margin-bottom: 12px;
    @media (max-width: 1024px){
  min-height: 11vw;
  }
`;
