import React from 'react';
import './style.css'
import Logo from '../../assets/devflix_logo_1.svg';
import Button from '../Button';


function Menu() {
    return (
        <nav id="navega_top">
            <div className="menu_esquerda">
                <a href="/">
                    <img className="nav_menu" src={Logo} alt="devflix logo" />
                </a>
                <ul className="menu_links">
                    <li><a href="/">Favoritos</a></li>
                    <li><a href="/">Front-End</a></li>
                    <li><a href="/">Back-End</a></li>
                    <li><a href="/">Entrevistas</a></li>
                </ul>
            </div>
            <Button as="a" className="ButtonLink" href="/">novo vídeo</Button>

        </nav>
    );
}

export default Menu;