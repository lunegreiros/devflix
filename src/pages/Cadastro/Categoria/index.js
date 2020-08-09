import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';
import FormField from '../../../components/FormField';
import LoadingIcon from '../../../components/Loading';
import useForm from '../../../hooks/useForm';

import './style.css';

function CadastroCategoria() {
  const valoresIniciais = {
    name: '',
    description: '',
  };
  const { handleChange, valuesForm, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  // use Effect dois parâmetros: o que fazer e quando fazer
  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://gameflix-two.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respServer) => {
        const respConverted = await respServer.json();

        setCategorias([
          ...respConverted,
        ]);
      });
  }, []);

  return (
    <PageTemplate>
      <h1>
        Cadastro de Categorias:
        {valuesForm.name}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        // console.log('você enviou um form');

        setCategorias([
          ...categorias,
          valuesForm,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          // type="text"
          name="name"
          value={valuesForm.name}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={valuesForm.description}
          onChange={handleChange}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>

      {categorias.length === 0 && (
        <div>
          <LoadingIcon />
        </div>
      )}
      {/* exibe a lista de '{categorias}' */}
      <table className="tableRegister">
        <tbody>
          {categorias.map((categoria) => (
            <tr key={`${categoria.titulo}_${categoria.id}`}>
              <td>
                {categoria.titulo}
              </td>
              <td className="btn_tableRegister">
                <button type="button">Deletar</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>

      <Link to="/cadastro/video">
        Cadastrar Vídeo
      </Link>
      <br />
      <Link to="/">
        Ir para a Home
      </Link>
    </PageTemplate>
  );
}

export default CadastroCategoria;
