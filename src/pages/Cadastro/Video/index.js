import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';

function CadastroVideo() {
  return (
    <PageTemplate>
      <h1>Cadastro de Vídeos</h1>

      <form action="">
        <FormField
          label="Nome da Categoria"
          // type="text"
          name="name"
          value={valuesForm.name}
          onChange={handleChange}
        />
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageTemplate>
  );
}

export default CadastroVideo;
