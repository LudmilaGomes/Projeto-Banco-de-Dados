import { showMenu } from "../menuFuncoes.js";
import { submenuAutor } from "./autor.js";
import { submenuEditora } from "./editora.js";
import { submenuLivro } from "./livro.js";
import { submenuRelatorios } from "./relatorios.js";

async function funcNavegar() 
{
  while (true) 
  {
    const choice = await showMenu(['Informações sobre Autor', 'Informações sobre Editora', 
    'Informações sobre Livros', 'Relatórios', 'Voltar']);
    switch (choice) 
    {
      case 'Informações sobre Autor':
        await submenuAutor();
        break;
      case 'Informações sobre Editora':
        await submenuEditora();
        break;
      case 'Informações sobre Livros':
        await submenuLivro();
        break;
      case 'Relatórios':
        await submenuRelatorios();
        break;
      case 'Voltar':
        return;
    }
  }
}

export {funcNavegar};