import styled from 'styled-components';

export const Container = styled.div`
    /* border: 1px solid orange; */
    position: absolute;
    top: 50vw;
    width: 100%;
    min-height: 250px;

    @media (min-width: 1025px){
        top: 45vw;
    }
`;