import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
color: var(--white);
padding: 80px 25%;
flex: 1;
`;

function PageTemplate({ children }) {
    return (
        <>
            <Menu />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
}

export default PageTemplate;