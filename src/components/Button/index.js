import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
color: var(--blackLighter);
  /* border: 1px solid var(--white); */
  box-sizing: border-box;
  cursor: pointer;
  padding: 5px 8px 0px 8px;
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