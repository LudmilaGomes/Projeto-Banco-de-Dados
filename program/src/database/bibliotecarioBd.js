import {api} from './axiosConfig.js';
const url_str = 'bibliot';

async function createBibliotecario(nome, cpf, email, senha, data_nasc, genero, endereco, telefone, data_admissao, formacao_academica) 
{
  const response = await api.post(url_str, {nome, cpf, email, senha, data_nasc, genero, endereco, telefone, data_admissao, formacao_academica})
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

async function loginBibliotecario(cpf, senha) 
{
  const url_new = url_str + 'Login';
  const response = await api.post(url_new, {cpf, senha})
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

async function readBibliotecarios() 
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

async function readBibliotecario(id) 
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

async function deleteBibliotecario(id) 
{
  const url = url_str + '/' + id;
  const response = await api.delete(url)
  .then(function (response) {
    console.log("Bibliotecario removido!");
  })
  .catch(function (error) {
    if (error.response== undefined)
      console.log("ERRO: ", error.message);
    else
      console.log("ERRO: ", error.response.data);
  });
}

async function updateBibliotecario(id, nome, cpf, email, senha, data_nasc, genero, endereco, telefone, data_admissao, formacao_academica) 
{
  const url = url_str + '/' + id;
  const response = await api.put(url, {nome, cpf, email, senha, data_nasc, genero, endereco, telefone, data_admissao, formacao_academica})
  .then(function (response) {
    console.log("Dados do insere atualizados!");
  })
  .catch(function (error) {
    if (error.response== undefined)
      console.log("ERRO: ", error.message);
    else
      console.log("ERRO: ", error.response.data);
  });
}

async function searchBibliotecario(nome_Bibliotecario) 
{
  const url_new = url_str + '/busca/' + nome_Bibliotecario;
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

export {createBibliotecario, loginBibliotecario, readBibliotecarios, readBibliotecario, 
  deleteBibliotecario, updateBibliotecario, searchBibliotecario};