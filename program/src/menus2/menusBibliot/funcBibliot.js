import { loginBibliotecario, readBibliotecarios } from "../../database/bibliotecarioBd.js";
import { readEmprestimos, readEmprestimosByBibliot, updateLivroDevolvido } from "../../database/emprestimoBd.js";
import { createMultas, readMultas, updateStatusMulta, updateValorMulta } from "../../database/multaBd.js";
import { readUsuarios } from "../../database/usuarioBd.js";
import { readlineSync, showMenu, waitForEnter } from "../menuFuncoes.js";
import { submenuAutor } from "./autor.js";
import { submenuBibliot } from "./bibliot.js";
import { submenuEditora } from "./editora.js";
import { submenuLivro } from "./livro.js";

async function relatorioBibliot()
{
  const bibliotecarios = await readBibliotecarios();
  let ids_bibliotecarios = [];
  for (let i = 0; i < bibliotecarios.length; i++) 
  {
    ids_bibliotecarios.push(bibliotecarios[i].id);
  }
  
  for (let i = 0; i < ids_bibliotecarios.length; i++) 
  {
    const id_bibliotecario = ids_bibliotecarios[i];
    let emprestimos_bibliot = await readEmprestimosByBibliot(id_bibliotecario);
    console.log(`Todos os emprestimos do bibliotecario de id ${id_bibliotecario}.`);
    console.log(emprestimos_bibliot);
  }
}

async function login()
{
  let cpf, senha;
  cpf = readlineSync.question('CPF do bibliotecario: ');
  senha = readlineSync.question('Senha do bibliotecario: ');
  const result = await loginBibliotecario(cpf, senha);
  return result;
}

async function funcBibliot() 
{
  let id, retorno;
  while(1)
  {
    retorno = await login();
    if(retorno != undefined)
      break;
    console.log('Tente novamente.');
    console.log();
  }

  console.clear();
  console.log('Executando métodos para verificação da existência de multas.');
  console.log();

  // salvamos ids de emprestimos em uma lista
  const emprestimos = await readEmprestimos();
  let ids_emprestimos = [];
  for (let i = 0; i < emprestimos.length; i++) 
  {
    ids_emprestimos.push(emprestimos[i].id);
  }
  // verificamos se há multa para empréstimos
  for (let i = 0; i < ids_emprestimos.length; i++) 
  {
    const id_emprestimo = ids_emprestimos[i];
    await createMultas(id_emprestimo);
  }

  console.log('Executando métodos para atualização de valores de multas.');
  console.log();
  // salvamos ids de multas em uma lista
  const multas = await readMultas();
  let ids_multas = [];
  for (let i = 0; i < multas.length; i++) 
  {
    ids_multas.push(multas[i].id);
  }
  // atualizamos valor da multa, se necessário
  for (let i = 0; i < ids_multas.length; i++) 
  {
    const id_multa = ids_multas[i];
    await updateValorMulta(id_multa);
  }
  
  await waitForEnter();

  while (true) 
  {
    console.clear();
    const choice = await showMenu(['Ver todos os Usuários', 'Informações de Bibliotecários',
    'Ver todos os Empréstimos', 'Atualizar Status de um Empréstimo', 'Ver todas as Multas', 
    'Atualizar Status de uma Multa', 'Informações de Livros', 'Informações de Autores', 
    'Informações de Editoras', 'Relatório de todos os Bibliotecários', 'Voltar']);
    switch (choice) 
    {
      case 'Ver todos os Usuários':
        console.log(await readUsuarios());
        await waitForEnter();
        break;
      case 'Informações de Bibliotecários':
        await submenuBibliot();
        console.log();
        await waitForEnter();
        break;
      case 'Ver todos os Empréstimos':
        console.log(await readEmprestimos());
        console.log();
        await waitForEnter();
        break;
      case 'Atualizar Status de um Empréstimo':
        console.log(await readEmprestimos());
        id = readlineSync.question('Id do Emprestimo: ');
        console.log(await updateLivroDevolvido(id));
        await waitForEnter();
        break;
      case 'Ver todas as Multas':
        console.log(await readMultas());
        console.log();
        await waitForEnter();
        break;
      case 'Atualizar Status de uma Multa':
        console.log(await readMultas());
        id = readlineSync.question('Id da Multa: ');
        console.log(await updateStatusMulta(id));
        console.log();
        await waitForEnter();
        break;
      case 'Informações de Livros':
        await submenuLivro();
        break;
      case 'Informações de Autores':
        await submenuAutor();
        break;
      case 'Informações de Editoras':
        await submenuEditora();
        break;
      case 'Relatório de todos os Bibliotecários':
        await relatorioBibliot();
        await waitForEnter();
        break;
      case 'Voltar':
        console.log("Desconectando...");
        return;
    }
  }
}

export {funcBibliot};