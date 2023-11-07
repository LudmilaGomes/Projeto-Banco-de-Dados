// ver multas

import { readUsuario, updateUsuario } from "../../database/usuarioBd.js";
import { readlineSync, showMenu, waitForEnter } from "../menuFuncoes.js";

async function verMultasUsuario(id) 
{
  while (true) 
  {
    console.clear();
    console.log(await readUsuario(id));
    let  nome, cpf, email, senha, info_estudante, data_nasc, genero, endereco, telefone;
    
    const choice = await showMenu(['Atualizar Dados', 'Voltar']);
    switch (choice) 
    {
      case 'Atualizar Dados':
        console.clear();
        nome = readlineSync.question('Nome do usuario: ');
        cpf = readlineSync.question('CPF do usuario: ');
        email = readlineSync.question('Email do usuario: ');
        senha = readlineSync.question('Senha do usuario: ');
        info_estudante = readlineSync.question('Usuario eh estudante (s/n): ');
        data_nasc = readlineSync.question('Data de nascimento do usuario (dd/mm/aaaa): ');
        genero = readlineSync.question('Genero do usuario: ');
        endereco = readlineSync.question('Endereco do usuario: ');
        telefone = readlineSync.question('Telefone do usuario: ');
        await updateUsuario(id, nome, cpf, email, senha, info_estudante, data_nasc, genero, endereco, telefone);
        await waitForEnter();
        break;
      case 'Voltar':
        return;
    }
  }
}

export {verMultasUsuario};