import React from 'react';
import './style.css'
import Logo from '../../assets/devflix_logo.png';
import Button from '../Button';


function Menu() {
    return (
        <nav id="navega_top">
            <a href="/">
                <img className="logo_menu" src={Logo} alt="devflix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">novo vídeo</Button>
        </nav>
    );
}

export default Menu;