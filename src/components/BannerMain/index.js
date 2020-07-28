import React from 'react';
import { BannerContainer, BannerMaskBlack, BannerMainDescription, WatchButton, PlayButton, ContentRating, LaunchDate } from './style';
import './style.css'
import Logo from '../../assets/spiderman-badge-desktop-tablet-01-ps4-05sep18en.png';
import { Play, Check } from 'react-feather';


const BannerMain = () =>
    (
        <>
            <BannerContainer>
                <BannerMaskBlack></BannerMaskBlack>
            </BannerContainer>
            <BannerMainDescription>
                <BannerMainDescription.Logo>
                    <img src={Logo} alt="Logo Spiderman Movie" />

                </BannerMainDescription.Logo>
                <BannerMainDescription.Info>
                    <LaunchDate>Lançamento</LaunchDate> 28 Ago. 2019
                    <ContentRating>12</ContentRating>
                     53.61 GB
                </BannerMainDescription.Info>
                <BannerMainDescription.Texto>
                    Quando um novo vilão ameaça a cidade de Nova York, os mundos de Peter Parker e do Homem-Aranha se colidem. Para salvar a cidade e aqueles que ele ama, ele deve se erguer e provar que é maior de todos os super-heróis.
                </BannerMainDescription.Texto>
                <BannerMainDescription.ButtonsNav>
                    <WatchButton>
                        <Play size={16} />
                        <PlayButton>Assistir</PlayButton>
                    </WatchButton>
                    <WatchButton>
                        <Check size={16} />
                        <PlayButton>Minha Lista</PlayButton>
                    </WatchButton>
                </BannerMainDescription.ButtonsNav>
                <BannerMainDescription.Texto>
                    © 2019 MARVEL
                    © 2019 Sony Interactive Entertainment LLC
                    Developed by Insomniac Games, Inc.
                </BannerMainDescription.Texto>

            </BannerMainDescription>

            <div className="BannerRow"></div>
        </>
    );


export default BannerMain;