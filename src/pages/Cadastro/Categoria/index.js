import React from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageTemplate>
            <h1>Cadastro de Categorias</h1>

            <form>
                <label>
                    Nome da Categoria:
                    <input type="text" />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <Link to='/cadastro/video'>
                Cadastrar Vídeo
            </Link>
            <br />
            <Link to='/'>
                Ir para a Home
            </Link>
        </PageTemplate>
    )
}

export default CadastroCategoria;