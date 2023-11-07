import {api} from './axiosConfig.js';
const url_str = 'usuario';

async function loginUsuario(cpf, senha)
{
  const url_new = url_str + 'Login';
  const response = await api.post(url_new, {cpf, senha})
    .then(function (response) {
      // console.log(response.data);
    return response.data;
    })
    .catch(function (error) {
      if(error.response == undefined)
        console.log("ERRO: ", error.response);  
      else
        if (error.response== undefined)
      console.log("ERRO: ", error.message);
    else
      console.log("ERRO: ", error.response.data);
    });
    return response;
}

async function createUsuario(nome, cpf, email, senha, info_estudante, data_nasc, genero, endereco, telefone) 
{
  const response = await api.post(url_str, {nome, cpf, email, senha, info_estudante, data_nasc, genero, endereco, telefone})
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

async function readUsuarios() 
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

async function readUsuario(id) 
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

async function deleteUsuario(id) 
{
  const url = url_str + '/' + id;
  const response = await api.delete(url)
  .then(function (response) {
    console.log("Usuario removido!");
  })
  .catch(function (error) {
    if (error.response== undefined)
      console.log("ERRO: ", error.message);
    else
      console.log("ERRO: ", error.response.data);
  });
}

async function updateUsuario(id, nome, cpf, email, senha, info_estudante, data_nasc, genero, endereco, telefone) 
{
  // console.log(id, nome, cpf, email, senha, info_estudante, data_nasc, genero, endereco, telefone);
  // if(nome == '')
  //   nome = undefined;
  // if(cpf == '')
  //   cpf = undefined;
  // if(email == '')
  //   email = undefined;
  // if(senha == '')
  //   senha = undefined;
  // if(info_estudante == '')
  //   info_estudante = undefined;
  // if(data_nasc == '')
  //   data_nasc = undefined;
  // if(genero == '')
  //   genero = undefined;
  // if(endereco == '')
  //   endereco = undefined;
  // if(telefone == '')
  //   telefone = undefined;
  // console.log(id, nome, cpf, email, senha, info_estudante, data_nasc, genero, endereco, telefone);
  // console.log();
  // console.log();
  const url = url_str + '/' + id;
  const response = await api.put(url, {nome, cpf, email, senha, info_estudante, data_nasc, genero, endereco, telefone})
  .then(function (response) {
    console.log("Dados do usuario atualizados!");
  })
  .catch(function (error) {
    if (error.response == undefined)
      console.log("ERRO: ", error.message);
    else
      console.log("ERRO: ", error.response.data);
  });
  // console.log();
  // console.log();
  // console.log();
}

export {loginUsuario, createUsuario, readUsuarios, readUsuario, deleteUsuario, updateUsuario};