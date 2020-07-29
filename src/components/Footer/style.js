import styled from 'styled-components';

export const FooterBase = styled.footer`
position: relative;
background: linear-gradient(180deg, rgba(30,30,30,1) 0%, rgba(15,15,15,1) 100%);
padding: 40px 10px 20px 10px;
color: var(--white);
text-align: center;

& > img{
    height: 35px;
}
& > p{
    font-size: .7rem;
    margin: 3px;
    color: gray;
}
  @media (max-width: 768px) {
    margin-bottom: 26px;
  }
`;