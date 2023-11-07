// menu que apresenta todos os livros como opções para selecionar
import {readlineSync, showMenu, waitForEnter} from './menus2/menuFuncoes.js';
import {funcNavegar} from './menus2/menusNavegar/funcNavegar.js';
import {funcUsuario} from './menus2/menusUsuario/funcUsuario.js';
import { funcBibliot } from './menus2/menusBibliot/funcBibliot.js';
import { createUsuario } from './database/usuarioBd.js';

async function mainMenu() 
{
  while (true) 
  {
    console.clear();
    console.log("========== BIBLIOTECA VIRTUAL ==========");
    let  nome, cpf, email, senha, info_estudante, data_nasc, genero, endereco, telefone;
    const choice = await showMenu(['Cadastro de Usuário', 'Login de Usuário', 
    'Login de Bibliotecário', 'Navegar', 'Sair do Programa']);
    
    switch (choice) 
    {
      case 'Cadastro de Usuário':
        console.log('Você escolheu o Cadastro de Usuário. Informações de cadastro são solicitadas.');
        nome = readlineSync.question('Nome do usuario: ');
        cpf = readlineSync.question('CPF do usuario: ');
        email = readlineSync.question('Email do usuario: ');
        senha = readlineSync.question('Senha do usuario: ');
        info_estudante = readlineSync.question('Usuario eh estudante (s/n): ');
        data_nasc = readlineSync.question('Data de nascimento do usuario (dd/mm/aaaa): ');
        genero = readlineSync.question('Genero do usuario: ');
        endereco = readlineSync.question('Endereco do usuario: ');
        telefone = readlineSync.question('Telefone do usuario: ');
        await createUsuario(nome, cpf, email, senha, info_estudante, data_nasc, genero, endereco, telefone);
        console.log("Usuario cadastrado.");
        await waitForEnter();
        break;
      case 'Login de Usuário':
        console.log('Você escolheu o Login de Usuário.');
        await funcUsuario();
        await waitForEnter();
        break;
      case 'Login de Bibliotecário':
        console.log('Você escolheu o Login de Bibliotecário.');
        await funcBibliot();
        await waitForEnter();
        break;
      case 'Navegar':
        console.log('Você escolheu a opção de Navegar.');
        console.log('Você poderá ver dados e informações sobre autores, editoras e livros, mas precisará se cadastrar/fazer login para conseguir fazer empréstimos de livros!');
        console.log();
        await funcNavegar();
        await waitForEnter();
        break;
      case 'Sair do Programa':
        return;
      default:
        console.log('Opção inválida.');
        break;
    }
  }
}

mainMenu();
