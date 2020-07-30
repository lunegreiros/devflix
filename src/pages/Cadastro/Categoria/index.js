import React, { useState } from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';

function CadastroCategoria() {

    const [categorias, setCategorias] = useState([]);
    const valoresIniciais = {
        nome: '',
        descricao: ''
    }
    const [valuesForm, setValuesForm] = useState(valoresIniciais);

    function setValue(key, value) {
        setValuesForm({
            ...valuesForm,
            [key]: value
        })
    }

    function handleChange(e) {
        setValue(e.target.getAttribute('name'), e.target.value);
    }

    return (
        <PageTemplate>
            <h1>Cadastro de Categorias: {valuesForm.nome}</h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                console.log('você enviou um form');

                setCategorias([
                    ...categorias,
                    valuesForm
                ]);

                setValuesForm(valoresIniciais);
            }
            }>
                {/* state */}
                <div>
                    <label>
                        Nome da Categoria:
                        <input
                            type="text"
                            name="nome"
                            value={valuesForm.nome}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            name="descricao"
                            value={valuesForm.descricao}
                            onChange={handleChange}
                        />
                    </label>
                </div>


                <button>
                    Cadastrar
                </button>
            </form>

            {/* exibe a lista de '{categorias}' */}
            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={index}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to='/cadastro/video'>
                Cadastrar Vídeo
            </Link>
            <br />
            <Link to='/'>
                Ir para a Home
            </Link>
        </PageTemplate >
    )
}

export default CadastroCategoria;