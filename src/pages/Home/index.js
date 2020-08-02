import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain';
import FooterBase from '../../components/Footer';
import CarouselContainer from '../../components/CarouselContainer';
import CustomScroll from 'react-custom-scroll';



function Home() {
  return (
    <>
      <CustomScroll>
        <Menu />
        <BannerMain />
        <CarouselContainer />

        <FooterBase />
      </CustomScroll>
    </>
  );
}

export default Home;
