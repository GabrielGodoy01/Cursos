import { Cliente } from "./Cliente";

export class ContaCorrente{
    agencia;
    _saldo = 0;
    _cliente;

    
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.cliente = novoValor;
        }
    }

    get cliente(){
        return this.cliente;
    }

    get saldo(){
        return this.saldo;
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
