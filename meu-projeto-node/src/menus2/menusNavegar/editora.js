import { waitForEnter, showMenu, readlineSync, promptEditora } from '../menuFuncoes.js';
import {createEditoras, readEditoras, readEditora, deleteEditora, updateEditora, searchEditora} from '../../database/editoraBd.js';

async function submenuEditora() 
{
  while (true) 
  {
    console.clear();
    const choice = await showMenu(['Retornar Editoras', 'Retornar Editora', 'Buscar Editora por nome', 'Voltar']);
    let id, nome, endereco, num_telefone, email, site, ano_fundacao;
    switch (choice) 
    {
      case 'Retornar Editoras':
        console.log(await readEditoras());
        await waitForEnter();
        break;
      case 'Retornar Editora':
        id = readlineSync.question('Id da editora: ');
        console.log(await readEditora(id));
        await waitForEnter();
        break;
      case 'Buscar Editora por nome':
        nome = readlineSync.question('Nome da editora: ');
        console.log(await searchEditora(nome));
        await waitForEnter();
        break;
      case 'Voltar':
        return;
    }
    console.clear();
  }
}

export {submenuEditora};