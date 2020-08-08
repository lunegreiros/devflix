import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
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

  return (
    <PageTemplate>
      <h1>
        Cadastro de Categorias:
        {valuesForm.nome}
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
          value={valuesForm.nome}
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

      {/* exibe a lista de '{categorias}' */}
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>
            {categoria.nome}
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
