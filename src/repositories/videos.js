import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}/?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (resp) => {
      if (resp.ok) {
        const resposta = await resp.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    })
    .catch(() => {
      // eslint-disable-next-line no-alert
      alert('Não foi possível criar o novo video');
    });
}

function deletarVideo(id) {
  return fetch(`${URL_VIDEOS}/?id=${id}`, {
    method: 'DELETE',
  })
    .then(async (resp) => {
      if (resp.ok) {
        const resposta = await resp.json();
        return resposta;
      }

      throw new Error('Não foi possível deletar os dados :(');
    })
    .catch(() => {
      // eslint-disable-next-line no-alert
      alert('Não foi possível deletar o video');
    });
}

export default {
  create,
  deletarVideo,
};
