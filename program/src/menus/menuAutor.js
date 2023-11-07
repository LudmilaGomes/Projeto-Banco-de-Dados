import { waitForEnter, showMenu, readlineSync, promptAutor } from './menuFuncoes.js';
import {createAutores, readAutores, readAutor, deleteAutor, updateAutor, searchAutor} from '../database/autorBd.js';

async function submenuAutor() 
{
  while (true) 
  {
    console.clear();
    const choice = await showMenu(promptAutor);
    let id, nome, data_nasc, nacionalidade, nome_autor;
    switch (choice) 
    {
      case 'Criar Autor':
        nome = readlineSync.question('Nome do autor: ');
        data_nasc = readlineSync.question('Data de nascimento do autor (dd/mm/aaaa): ');
        nacionalidade = readlineSync.question('Nacionalidade do autor: ');
        console.log(nome);
        console.log(data_nasc);
        console.log(nacionalidade);
        await createAutores(nome, data_nasc, nacionalidade);
        await waitForEnter();
        break;
      case 'Retornar Autores':
        await readAutores();
        await waitForEnter();
        break;
      case 'Retornar Autor':
        id = readlineSync.question('Id do autor: ');
        console.log(id);
        await readAutor(id);
        await waitForEnter();
        break;
      case 'Buscar Autor por nome':
        nome_autor = readlineSync.question('Nome do autor: ');
        console.log(nome_autor);
        await searchAutor(nome_autor);
        await waitForEnter();
        break;
      case 'Atualizar Autor':
        id = readlineSync.question('Id do autor: ');
        nome = readlineSync.question('Nome do autor: ');
        data_nasc = readlineSync.question('Data de nascimento do autor (dd/mm/aaaa): ');
        nacionalidade = readlineSync.question('Nacionalidade do autor: ');
        console.log(id);
        console.log(nome);
        console.log(data_nasc);
        console.log(nacionalidade);
        await updateAutor(id, nome, data_nasc, nacionalidade);
        await waitForEnter();
        break;
      case 'Excluir Autor':
        id = readlineSync.question('Id do autor: ');
        await deleteAutor(id);
        await waitForEnter();
        break;
      case 'Voltar':
        return;
    }
    console.clear();
  }
}

export {submenuAutor};