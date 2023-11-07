import { waitForEnter, showMenu, readlineSync } from '../menuFuncoes.js';
import { createBibliotecario, deleteBibliotecario, readBibliotecario, readBibliotecarios, searchBibliotecario, updateBibliotecario } from '../../database/bibliotecarioBd.js';

async function submenuBibliot() 
{
  while (true) 
  {
    console.clear();
    const choice = await showMenu(['Criar Bibliotecario', 'Retornar Bibliotecarios', 'Retornar Bibliotecario',
    'Buscar Bibliotecario por nome', 'Atualizar Bibliotecario', 'Excluir Bibliotecario', 'Voltar']);
    let id, nome, cpf, email, senha, data_nasc, genero, endereco, telefone, data_admissao, formacao_academica;
    switch (choice) 
    {
      case 'Criar Bibliotecario':
        nome = readlineSync.question('Nome do bibliotecario: ');
        cpf = readlineSync.question('CPF do bibliotecario: ');
        email = readlineSync.question('Email do bibliotecario: ');
        senha = readlineSync.question('Senha do bibliotecario: ');
        data_nasc = readlineSync.question('Data de nascimento do bibliotecario (dd/mm/aaaa): ');
        genero = readlineSync.question('Genero do bibliotecario: ');
        endereco = readlineSync.question('Endereco do bibliotecario: ');
        telefone = readlineSync.question('Telefone do bibliotecario: ');
        data_admissao = readlineSync.question('Data de admissao do bibliotecario (dd/mm/aaaa): ');
        formacao_academica = readlineSync.question('Formacao academica do bibliotecario: ');
        console.log(await createBibliotecario(nome, cpf, email, senha, data_nasc, genero, endereco, telefone, data_admissao, formacao_academica));
        await waitForEnter();
        break;
      case 'Retornar Bibliotecarios':
        console.log(await readBibliotecarios());
        await waitForEnter();
        break;
      case 'Retornar Bibliotecario':
        id = readlineSync.question('Id do autor: ');
        console.log(await readBibliotecario(id));
        await waitForEnter();
        break;
      case 'Buscar Bibliotecario por nome':
        let nome_Bibliotecario = readlineSync.question('Nome do Bibliotecario: ');
        console.log(await searchBibliotecario(nome_Bibliotecario));
        await waitForEnter();
        break;
      case 'Atualizar Bibliotecario':
        id = readlineSync.question('Id do autor: ');
        nome = readlineSync.question('Nome do bibliotecario: ');
        cpf = readlineSync.question('CPF do bibliotecario: ');
        email = readlineSync.question('Email do bibliotecario: ');
        senha = readlineSync.question('Senha do bibliotecario: ');
        data_nasc = readlineSync.question('Data de nascimento do bibliotecario (dd/mm/aaaa): ');
        genero = readlineSync.question('Genero do bibliotecario: ');
        endereco = readlineSync.question('Endereco do bibliotecario: ');
        telefone = readlineSync.question('Telefone do bibliotecario: ');
        data_admissao = readlineSync.question('Data de admissao do bibliotecario (dd/mm/aaaa): ');
        formacao_academica = readlineSync.question('Formacao academica do bibliotecario: ');
        await updateBibliotecario(id, nome, cpf, email, senha, data_nasc, genero, endereco, telefone, data_admissao, formacao_academica);
        await waitForEnter();
        break;
      case 'Excluir Bibliotecario':
        id = readlineSync.question('Id do Bibliotecario: ');
        await deleteBibliotecario(id);
        await waitForEnter();
        break;
      case 'Voltar':
        return;
    }
    console.clear();
  }
}

export {submenuBibliot};