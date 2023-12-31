import { waitForEnter, showMenu, readlineSync, promptLivro } from '../menuFuncoes.js';
import {createLivros, readLivros, readLivro, deleteLivro, updateLivro, searchLivro} from '../../database/livroBd.js';

async function submenuLivro() 
{
  while (true) 
  {
    console.clear();
    const choice = await showMenu(promptLivro);
    let id, nome, nome_autor = null, nome_editora = null, descricao, quantidade, data_public, genero, volume, edicao;
    switch (choice) 
    {
      case 'Criar Livro':
        nome = readlineSync.question('Nome do livro: ');
        nome_autor = readlineSync.question('Nome do autor do livro: ');
        nome_editora = readlineSync.question('Nome da editora do livro: ');
        descricao = readlineSync.question('Descricao do livro: ');
        quantidade = readlineSync.question('Quantidade de exemplares do livro: ');
        data_public = readlineSync.question('Data de publicacao do livro (dd/mm/aaaa): ');
        genero = readlineSync.question('Genero do livro: ');
        volume = readlineSync.question('Volume do livro: ');
        edicao = readlineSync.question('Edicao do livro: ');
        console.log(await createLivros(nome, nome_autor, nome_editora, descricao, quantidade, data_public, genero, volume, edicao))
        await waitForEnter();
        break;
      case 'Retornar Livros':
        console.log(await readLivros());
        await waitForEnter();
        break;
      case 'Retornar Livro':
        id = readlineSync.question('Id do livro: ');
        console.log(await readLivro(id));
        await waitForEnter();
        break;
      case 'Buscar Livro por nome':
        nome = readlineSync.question('Nome do livro: ');
        console.log(await searchLivro(nome));
        await waitForEnter();
        break;
      case 'Atualizar Livro':
        id = readlineSync.question('Id do livro: ');
        nome = readlineSync.question('Nome do livro: ');
        nome_autor = readlineSync.question('Nome do autor do livro: ');
        nome_editora = readlineSync.question('Nome da editora do livro: ');
        descricao = readlineSync.question('Descricao do livro: ');
        quantidade = readlineSync.question('Quantidade de exemplares do livro: ');
        data_public = readlineSync.question('Data de publicacao do livro (dd/mm/aaaa): ');
        genero = readlineSync.question('Genero do livro: ');
        volume = readlineSync.question('Volume do livro: ');
        edicao = readlineSync.question('Edicao do livro: ');
        await updateLivro(id, nome, nome_autor, nome_editora, descricao, quantidade, data_public, genero, volume, edicao);
        await waitForEnter();
        break;
      case 'Excluir Livro':
        id = readlineSync.question('Id do livro: ');
        await deleteLivro(id);
        await waitForEnter();
        break;
      case 'Voltar':
        return;
    }
    console.clear();
  }
}

export {submenuLivro};