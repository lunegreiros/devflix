import React from 'react';
import './style.css'
import Logo from '../../assets/gameflix_logo.png';
import Button from '../Button';
import { PlusSquare } from 'react-feather';



function Menu() {
    return (
        <nav id="navega_top">
            <div className="menu_esquerda">
                <a href="/">
                    <img className="nav_menu" src={Logo} alt="devflix logo" />
                </a>
                <ul className="menu_links">
                    <li><a href="/">Favoritos</a></li>
                    <li><a href="/">FPS</a></li>
                    <li><a href="/">Ação</a></li>
                    <li><a href="/">RPG</a></li>
                    <li><a href="/">Narrativas</a></li>
                </ul>
            </div>

            <Button as="a" className="ButtonLink" href="/">
                <PlusSquare color="lightgray" size={20} />
            </Button>

        </nav>
    );
}

export default Menu;