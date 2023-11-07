import {api} from './axiosConfig.js';
const url_str = 'editora';

async function createEditoras(nome, endereco, num_telefone, email, site, ano_fundacao) 
{
  const response = await api.post(url_str, {nome, endereco, num_telefone, email, site, ano_fundacao})
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

async function readEditoras() 
{
  const response = await api.get(url_str)
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

async function readEditora(id) 
{
  const url = url_str + '/' + id;
  const response = await api.get(url)
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

async function updateEditora(id, nome, endereco, num_telefone, email, site, ano_fundacao) 
{
  const url = url_str + '/' + id;
  const response = await api.put(url, {nome, endereco, num_telefone, email, site, ano_fundacao})
  .then(function (response) {
    console.log("Dados da editora atualizados!");
  })
  .catch(function (error) {
    if (error.response== undefined)
      console.log("ERRO: ", error.message);
    else
      console.log("ERRO: ", error.response.data);
  });
}

async function deleteEditora(id) 
{
  const url = url_str + '/' + id;
  const response = await api.delete(url)
  .then(function (response) {
    console.log("Editora removida!");
  })
  .catch(function (error) {
    if (error.response== undefined)
      console.log("ERRO: ", error.message);
    else
      console.log("ERRO: ", error.response.data);
  });
}

async function searchEditora(nome_editora) 
{
  const url_new = url_str + '/busca/' + nome_editora;
  const response = await api.get(url_new)
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

export {createEditoras, readEditoras, readEditora, deleteEditora, updateEditora, searchEditora};