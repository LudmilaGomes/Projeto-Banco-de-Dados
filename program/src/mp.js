import { submenuAutor, 
submenuEditora, 
submenuLivro, 
submenuRelatorios, 
showMenu, 
promptMenu } from './menus/menu.index.js';
import chalk from 'chalk';
import figlet from 'figlet';

// Função para exibir o menu principal
async function mainMenu() 
{
  while (true) 
  {
    console.clear();
    console.log("========== BIBLIOTECA VIRTUAL ==========");
    const choice = await showMenu(promptMenu);
    
    switch (choice) 
    {
      case 'Usuário':
        break;
      case 'Livros para Empréstimo':
        break;
      case 'Dados | Autor':
        await submenuAutor();
        break;
      case 'Dados | Editora':
        await submenuEditora();
        break;
      case 'Dados | Livros':
        await submenuLivro();
        break;
      case 'Relatórios':
        await submenuRelatorios();
        break;
      case 'Sair do Programa':
        console.log('Saindo do programa.');
        return;
    }
  }
}

mainMenu();