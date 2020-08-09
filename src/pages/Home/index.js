import React, { useEffect } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import FooterBase from '../../components/Footer';
import CarouselContainer from '../../components/CarouselContainer';
import categoriesRepository from '../../repositories/categories';

function Home() {
  // http://localhost:8080/categorias?_embed=videos
  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        // eslint-disable-next-line no-console
        console.log(categoriasComVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

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
