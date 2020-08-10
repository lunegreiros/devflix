import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import FooterBase from '../../components/Footer';
// import CarouselContainer from '../../components/CarouselContainer';
import categoriesRepository from '../../repositories/categories';
import LoadingIcon from '../../components/Loading';
import { Container } from '../../components/CarouselContainer/style';
import Carousel from '../../components/Carousel';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  // http://localhost:8080/categorias?_embed=videos
  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        // eslint-disable-next-line no-console
        setDadosIniciais(categoriasComVideos);
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
      {dadosIniciais.length === 0 && (
        <div><LoadingIcon /></div>
      )}

      <Container>
        {dadosIniciais.map((categoria) => (
          <Carousel key={categoria.id} category={categoria} />
        ))}
      </Container>

      <FooterBase />
    </>
  );
}

export default Home;
