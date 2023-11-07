import {api} from './axiosConfig.js';
const url_str = 'multa';

async function createMultas(id_emprestimo) 
{
  const response = await api.post(url_str, {id_emprestimo})
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

async function readMultas() 
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

async function updateValorMulta(id) 
{
  const url = url_str + '/valor/' + id;
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

async function updateStatusMulta(id) 
{
  const url = url_str + '/status/' + id;
  const response = await api.put(url)
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


// método que retorna todos os empréstimos de um usuário
async function readMultasByUsuario(id) 
{
  const url = url_str + '/busca/' + id;
  const response = await api.get(url)
  .then(function (response) {
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

export {createMultas, readMultas, updateValorMulta, 
  updateStatusMulta, readMultasByUsuario};