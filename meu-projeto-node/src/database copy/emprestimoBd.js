import {api} from './axiosConfig.js';
const url_str = 'emprestimo';

async function createEmprestimos(id_usuario, id_exemplar, id_bibliotecario) 
{
  const response = await api.post(url_str, {id_usuario, id_exemplar, id_bibliotecario})
    .then(function (response) {
      // console.log(response.data);
    return response.data;
    })
    .catch(function (error) {
      if (error.response== undefined)
      console.log("ERRO: ", error.message);
    else
      console.log("ERRO: ", error.response.data);
    });
    return response;
}

async function readEmprestimos() 
{
  const response = await api.get(url_str)
  .then(function (response) {
    // console.log(response.data);
    return response.data
  })
  .catch(function (error) {
    if (error.response== undefined)
      console.log("ERRO: ", error.message);
    else
      console.log("ERRO: ", error.response.data);
  });
  return response;
}

async function readEmprestimo(id) 
{
  const url = url_str + '/' + id;
  const response = await api.get(url)
  .then(function (response) {
    // console.log(response.data);
    return response.data
  })
  .catch(function (error) {
    if (error.response== undefined)
      console.log("ERRO: ", error.message);
    else
      console.log("ERRO: ", error.response.data);
  });
  return response;
}

async function updateLivroDevolvido(id) 
{
  const url = url_str + '/' + id;
  const response = await api.put(url)
  .then(function (response) {
    // console.log(response.data);
    return response.data
  })
  .catch(function (error) {
    if (error.response== undefined)
      console.log("ERRO: ", error.message);
    else
      console.log("ERRO: ", error.response.data);
  });
  return response;
}

// método que retorna todos os empréstimos de um usuário
async function readEmprestimosByUsuario(id) 
{
  const url = url_str + '/busca/usuario/' + id;
  const response = await api.get(url)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    if (error.response== undefined)
      console.log("ERRO: ", error.message);
    else
      console.log("ERRO: ", error.response.data);
  });
  return response;
}

// método que retorna todos os empréstimos de um bibliotecário
async function readEmprestimosByBibliot(id) 
{
  const url = url_str + '/busca/bibliot/' + id;
  const response = await api.get(url)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    if (error.response== undefined)
      console.log("ERRO: ", error.message);
    else
      console.log("ERRO: ", error.response.data);
  });
  return response;
}

export {createEmprestimos, readEmprestimos, readEmprestimo, 
  updateLivroDevolvido, readEmprestimosByUsuario, readEmprestimosByBibliot};