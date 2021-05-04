import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Gabriel", 11122233309);

const cliente2 = new Cliente("Ana", 292929233300);

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia= 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 22;

contaCorrenteRicardo.transferir(200, conta2)

console.log(conta2);