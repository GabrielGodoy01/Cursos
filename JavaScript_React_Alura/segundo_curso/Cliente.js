export class Cliente {
    nome;
    _cpf;

    get cpf(){
        this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
}