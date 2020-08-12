import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { PlusSquare } from 'react-feather';
import Logo from '../../assets/gameflix_logo.png';
import Button from '../Button';

function Menu() {
  return (
    <nav id="navega_top">
      <div className="menu_esquerda">
        <Link to="/">
          <img className="nav_menu" src={Logo} alt="devflix logo" />
        </Link>

      </div>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        <PlusSquare color="lightgray" size={20} />
      </Button>

    </nav>
  );
}

export default Menu;
