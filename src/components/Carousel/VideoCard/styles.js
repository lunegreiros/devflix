import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  /* border: 1px solid; */
  /* border-radius: 4px; */
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;

  /* siz flexible */
  flex: 0 0 17vw;
  width: 17vw;
  height: 9vw;
  /*  */

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .5s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
  @media (max-width: 1024px){
  flex: 0 0 22vw;
  width: 22vw;
  height: 11vw;
  }
`;
