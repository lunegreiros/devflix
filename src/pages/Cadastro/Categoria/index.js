import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';
import FormField from '../../../components/FormField';
import LoadingIcon from '../../../components/Loading';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    name: '',
    description: '',
  };
  const [valuesForm, setValuesForm] = useState(valoresIniciais);

  function setValue(key, value) {
    setValuesForm({
      ...valuesForm,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

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

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       name: 'Front End',
    //       description: 'Uma categoria de fronte end',
    //     },
    //     {
    //       id: 2,
    //       name: 'Front End 2',
    //       description: 'Uma categoria de fronte end 2',
    //     },
    //   ]);
    // }, 4 * 1000);
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

        setValuesForm(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
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
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.name}`}>
            {categoria.name}
          </li>
        ))}
      </ul>

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
