// importações importantes que são usadas
// importado para ser usado nos outros arquivos (é exportado)
import readline from "readline";
import inquirer from "inquirer";
import readlineSync from "readline-sync";

// listas com as opções para cada menu; são exportadas e usadas nos arquivos de menu
const promptMenu = [ 'Usuário', 'Livros para Empréstimo',
'Dados | Autor', 'Dados | Editora', 'Dados | Livros', 
'Relatórios', 'Sair do Programa', 
];
const promptAutor = ['Criar Autor', 'Retornar Autores', 'Retornar Autor', 'Buscar Autor por nome', 'Atualizar Autor', 'Excluir Autor', 'Voltar'];
const promptEditora = ['Criar Editora', 'Retornar Editoras', 'Retornar Editora', 'Buscar Editora por nome', 'Atualizar Editora', 'Excluir Editora', 'Voltar'];
const promptLivro = ['Criar Livro', 'Retornar Livros', 'Retornar Livro', 'Buscar Livro por nome', 'Atualizar Livro', 'Excluir Livro', 'Voltar'];
const promptRelatorios = ['Visualizar Relatório de Autores', 'Visualizar Relatório de Editoras', 'Visualizar Relatório de Livros', 'Voltar'];

// função para fazer programa esperar até usuário pressionar Enter
async function waitForEnter() 
{
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  await new Promise((resolve) => {
    rl.question('Pressione ENTER para continuar...', () => {
      rl.close();
      resolve();
    });
  });
}

// função para exibir um menu e retornar a opção selecionada
async function showMenu(options) 
{
  const response = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Escolha uma opção:',
      choices: options,
    }
  ]);

  return response.choice;
}

export {waitForEnter, 
showMenu, 
readlineSync, 
promptMenu,
promptAutor, 
promptEditora, 
promptLivro, 
promptRelatorios};