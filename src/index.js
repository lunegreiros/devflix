import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

// route
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/cadastro/video' component={CadastroVideo} />
            <Route path='/cadastro/categoria' component={CadastroCategoria} />
            <Route component={Home} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));