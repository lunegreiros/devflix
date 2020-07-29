import React from 'react';
import { Container } from './style';
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';

function CarouselContainer() {

    return (
        <Container>
            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

            <Carousel category={dadosIniciais.categorias[1]} />

            <Carousel category={dadosIniciais.categorias[2]} />

            <Carousel category={dadosIniciais.categorias[3]} />

            <Carousel category={dadosIniciais.categorias[4]} />

            <Carousel category={dadosIniciais.categorias[5]} />
        </Container>
    );
}

export default CarouselContainer;