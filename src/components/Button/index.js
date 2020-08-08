import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
color: var(--blackLighter);
  /* border: 1px solid var(--white);
  border-radius: 5px; */
  box-sizing: border-box;
  cursor: pointer;
  padding: 5px 14px 5px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  outline: none;
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
