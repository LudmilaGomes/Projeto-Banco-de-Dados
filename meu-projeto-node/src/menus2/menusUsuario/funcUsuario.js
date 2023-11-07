import { readBibliotecarios } from "../../database/bibliotecarioBd.js";
import { createEmprestimos, readEmprestimosByUsuario } from "../../database/emprestimoBd.js";
import { readLivros } from "../../database/livroBd.js";
import { readMultasByUsuario } from "../../database/multaBd.js";
import { loginUsuario } from "../../database/usuarioBd.js";
import { readlineSync, showMenu, waitForEnter } from "../menuFuncoes.js";
import { submenuAutor } from "./autor.js";
import { submenuEditora } from "./editora.js";
import { submenuRelatorios } from "./relatorios.js";
import { dadosUsuario } from "./usuario.js";

async function login()
{
  let cpf, senha;
  cpf = readlineSync.question('CPF do usuario: ');
  senha = readlineSync.question('Senha do usuario: ');
  const result = await loginUsuario(cpf, senha);
  return result;
}

async function funcUsuario() 
{
  let retorno, id_exemplar, id_bibliotecario;
  while(1)
  {
    retorno = await login();
    if(retorno != undefined)
      break;
    console.log('Tente novamente.');
    console.log();
  }

  while (true) 
  {
    console.clear();
    const choice = await showMenu(['Informações de Usuário', 'Realizar Empréstimo', 
    'Ver Empréstimos', 'Ver Multas', 'Informações sobre Autor', 'Informações sobre Editora', 
    'Relatórios', 'Voltar']);
    switch (choice) 
    {
      case 'Informações de Usuário':
        await dadosUsuario(retorno[0]);
        await waitForEnter();
        break;
      case 'Realizar Empréstimo':
        console.log(await readLivros());
        id_exemplar = readlineSync.question('Id do Livro: ');
        console.log(await readBibliotecarios());
        id_bibliotecario = readlineSync.question('Id do Bibliotecario: ');
        console.log(await createEmprestimos(retorno[0], id_exemplar, id_bibliotecario));
        console.log();
        await waitForEnter();
        break;
      case 'Ver Empréstimos':
        console.log(await readEmprestimosByUsuario(retorno[0]));
        console.log();
        await waitForEnter();
        break;
      case 'Ver Multas':
        console.log(await readMultasByUsuario(retorno[0]));
        console.log();
        await waitForEnter();
        break;
      case 'Informações sobre Autor':
        await submenuAutor();
        break;
      case 'Informações sobre Editora':
        await submenuEditora();
        break;
      case 'Relatórios':
        await submenuRelatorios();
        break;
      case 'Voltar':
        console.log("Desconectando...");
        return;
    }
  }
}

export {funcUsuario};