import prompt from 'prompt-sync';
let ler = prompt();

import {depositar, sacar, exibirSaldo, jurosComposto} from './financeiro.js';
import {mensagemTexto} from './exibicao.js';
import {menu} from './menu.js';

console.clear();
mensagemTexto('\nOlá, Qual o seu saldo atual?\n');
let saldo = Number(ler());

let stop = true;

while(stop == true) {
    let escolha = menu();

    if (escolha == 5) {
        mensagemTexto('\nSaindo.\n');
        stop = false;
    } else if (escolha == 1) {
        saldo = depositar(saldo);
    } else if (escolha == 2) {
        saldo = sacar(saldo);
    } else if (escolha == 4) {
        saldo = jurosComposto(saldo);
    } else if (escolha == 3) {
        exibirSaldo(saldo);
    }
}