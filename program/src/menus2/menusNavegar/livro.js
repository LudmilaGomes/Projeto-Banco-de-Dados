import { waitForEnter, showMenu, readlineSync, promptLivro } from '../menuFuncoes.js';
import {createLivros, readLivros, readLivro, deleteLivro, updateLivro, searchLivro} from '../../database/livroBd.js';

async function submenuLivro() 
{
  while (true) 
  {
    console.clear();
    const choice = await showMenu(['Retornar Livros', 'Retornar Livro', 'Buscar Livro por nome', 'Voltar']);
    let id, nome, nome_autor = null, nome_editora = null, descricao, quantidade, data_public, genero, volume, edicao;
    switch (choice) 
    {
      case 'Retornar Livros':
        console.log(await readLivros());
        await waitForEnter();
        break;
      case 'Retornar Livro':
        id = await readlineSync.question('Id do livro: ');
        console.log(await readLivro(id));
        await waitForEnter();
        break;
      case 'Buscar Livro por nome':
        nome = readlineSync.question('Nome do livro: ');
        console.log(await searchLivro(nome));
        await waitForEnter();
        break;
      case 'Voltar':
        return;
    }
    console.clear();
  }
}

export {submenuLivro};