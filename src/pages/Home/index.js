import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain';
import FooterBase from '../../components/Footer';
import CarouselContainer from '../../components/CarouselContainer';



function Home() {
  return (
    <>
      <Menu />
      <BannerMain />
      <CarouselContainer />

      <FooterBase />
    </>
  );
}

export default Home;
