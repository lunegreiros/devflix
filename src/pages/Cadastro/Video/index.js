import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';
import { ButtonSubmit } from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, valuesForm } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriesRepository.getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageTemplate>
      <h1>Cadastro de Vídeos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === valuesForm.categoria);
        // console.log(categoriaEscolhida);

        if (categoriaEscolhida !== undefined) {
          videosRepository.create({
            titulo: valuesForm.titulo,
            url: valuesForm.url,
            categoriaId: categoriaEscolhida.id,
          })
            .then(() => {
              history.push('/');
            })
            .catch(() => {
            // throw new Error('Não foi possível cadastrar o vídeo');
            // eslint-disable-next-line no-alert
              alert('Ocorreu um erro. Não foi possível cadastrar o vídeo');
            });
        } else {
          // eslint-disable-next-line no-alert
          alert('Erro ao inserir o video. Use as sugestões de Categorias!');
        }
      }}
      >
        <FormField
          label="Título do Vídeo"
          // type="text"
          name="titulo"
          value={valuesForm.titulo}
          onChange={handleChange}
        />
        <FormField
          label="URL"
          // type="text"
          name="url"
          value={valuesForm.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          // type="text"
          name="categoria"
          value={valuesForm.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <ButtonSubmit type="submit">
          Cadastrar
        </ButtonSubmit>
      </form>
      <br />

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageTemplate>
  );
}

export default CadastroVideo;
