import { waitForEnter, showMenu, readlineSync, promptAutor } from '../menuFuncoes.js';
import {createAutores, readAutores, readAutor, deleteAutor, updateAutor, searchAutor} from '../../database/autorBd.js';

async function submenuAutor() 
{
  while (true) 
  {
    console.clear();
    const choice = await showMenu(['Retornar Autores', 'Retornar Autor', 'Buscar Autor por nome', 'Voltar']);
    let id;
    switch (choice) 
    {
      case 'Retornar Autores':
        console.log(await readAutores());
        await waitForEnter();
        break;
      case 'Retornar Autor':
        id = readlineSync.question('Id do autor: ');
        console.log(await readAutor(id));
        await waitForEnter();
        break;
      case 'Buscar Autor por nome':
        nome_autor = readlineSync.question('Nome do autor: ');
        console.log(await searchAutor(nome_autor));
        await waitForEnter();
        break;
      case 'Voltar':
        return;
    }
    console.clear();
  }
}

export {submenuAutor};