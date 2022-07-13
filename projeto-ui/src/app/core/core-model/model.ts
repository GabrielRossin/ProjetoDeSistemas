//import { SetorModule } from './../setor/setor.module';
import * as moment from 'moment';

export class Setor {
    codigo?: number;
    nome?: string;

    static toJson(setor: Setor): any
    {
        return {
            codigo: setor.codigo,
            nome: setor.nome
        };
    }
}

export class Grupo {
    codigo?: number;
    nome?: string;

    static toJson(grupo: Grupo): any
    {
        return{
            codigo: grupo.codigo,
            nome: grupo.nome
        };
    }
}

export class Cliente {
    codigo?: number;
    nome?: string;
    cpf?: string;
    salario?: number;
    ativo = true;

    static toJson(cliente: Cliente): any
    {
        return {
            codigo: cliente.codigo,
            nome: cliente.nome,
            cpf: cliente.cpf,
            salario: cliente.salario,
            ativo: cliente.ativo,
        };
    }
}

export class Projeto {
    codigo?: number;
    nome?: string;
    descricao?: string;
    inicio?: Date;
    fim?: Date;
    setor = new Setor();

    static toJson(projeto: Projeto): any
    {
        return{
            codigo: projeto.codigo,
            nome: projeto.nome,
            descricao: projeto.descricao,
            inicio: moment(projeto.inicio).format('DD/MM/YYYY'),
            fim: moment(projeto.fim).format('DD/MM/YYYY'),
            setor: projeto.setor
        };
    }
}

export class ProjetoFuncionario {
    codigo?: number;
    cargaHoraria?: number;
    gestor = false;
    inicio?: Date;
    fim?: Date;
    funcionario = new Cliente();
    projeto = new Projeto();

    static toJson(projeto_funcionario: ProjetoFuncionario): any
    {
        return{
            codigo: projeto_funcionario.codigo,
            cargaHoraria: projeto_funcionario.cargaHoraria,
            gestor: projeto_funcionario.gestor,
            inicio: moment(projeto_funcionario.inicio).format('DD/MM/YYYY'),
            fim: moment(projeto_funcionario.fim).format('DD/MM/YYYY'),
            funcionario: projeto_funcionario.funcionario,
            projeto: projeto_funcionario.projeto,
        };
    }
}
