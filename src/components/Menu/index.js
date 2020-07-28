import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import Logo from '../../assets/gameflix_logo.png';
import Button from '../Button';
import { PlusSquare } from 'react-feather';



function Menu() {
    return (
        <nav id="navega_top">
            <div className="menu_esquerda">
                <Link to="/">
                    <img className="nav_menu" src={Logo} alt="devflix logo" />
                </Link>
                <ul className="menu_links">
                    <li><a href="/">Favoritos</a></li>
                    <li><a href="/">FPS</a></li>
                    <li><a href="/">Ação</a></li>
                    <li><a href="/">RPG</a></li>
                    <li><a href="/">Narrativas</a></li>
                </ul>
            </div>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                <PlusSquare color="lightgray" size={20} />
            </Button>

        </nav>
    );
}

export default Menu;