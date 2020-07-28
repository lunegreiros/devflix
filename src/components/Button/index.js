import styled from 'styled-components';

const Button = styled.button`
color: var(--blackLighter);
  /* border: 1px solid var(--white); */
  box-sizing: border-box;
  cursor: pointer;
  padding: 5px 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  outline: none;
  /* border-radius: 5px; */
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
&:hover,
&:focus {
  /* opacity: 0.5; */
  color: white;
}
`;

export default Button;