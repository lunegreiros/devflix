import React from 'react';
import { BannerContainer, BannerMaskBlack } from './style';
import './style.css'


const BannerMain = () =>
    (
        <>
            <BannerContainer>
                <BannerMaskBlack></BannerMaskBlack>
            </BannerContainer>
            <div className="BannerRow"></div>

        </>
    );


export default BannerMain;