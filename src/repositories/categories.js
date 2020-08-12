import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (resp) => {
      if (resp.ok) {
        const resposta = await resp.json();
        return resposta;
      }

      throw new Error('Não foi possível recuperar os dados do servidor');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}/?_embed=videos`)
    .then(async (resp) => {
      if (resp.ok) {
        const resposta = await resp.json();
        return resposta;
      }

      throw new Error('Não foi possível recuperar os dados do servidor');
    });
}

function deletarCategoria(id) {
  return fetch(`${URL_CATEGORIES}/?id=${id}`, {
    method: 'DELETE',
  })
    .then(async (resp) => {
      if (resp.ok) {
        const resposta = await resp.json();
        return resposta;
      }

      throw new Error('Não foi possível deletar os dados do servidor');
    });
}

export default {
  getAllWithVideos,
  getAll,
  deletarCategoria,
};
