import React from 'react';
import { FooterBase } from './style';
import Logo from '../../assets/gameflix_logo.png';

function Footer() {
    return (
        <FooterBase>

            <img src={Logo} alt="logo_assina"></img>
            <p>
                Imersão Alura @ luke negreiros 2020
        </p>

        </FooterBase>
    );
}

export default Footer;