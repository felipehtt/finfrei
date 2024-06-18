import prompt from 'prompt-sync';
let ler = prompt ();

import {mensagemTexto} from './exibicao.js';

export function depositar(saldo) { 
    mensagemTexto('\nQuanto você gostaria de depositar?\n');
    
    let depositado = Number(ler());
    let valorNovo = 0;

    while (depositado <= 0){
        mensagemTexto('\nQuanto você gostaria de depositar?\n');
        depositado = Number(ler()); 
    };

    if (depositado == 'c') {
        valorNovo = saldo
    };
        
    valorNovo = saldo + depositado; 
    
    return valorNovo; 
};

export function sacar(saldo) {
    mensagemTexto('\nQuanto você gostaria de sacar?\n');
    let saque = Number(ler());
    let valorNovo = 0;

    while (saque <= 0){
        mensagemTexto('\nQuanto você gostaria de sacar?\n')
        saque = Number(ler()); 
    };

    if(saque == 'c'){
       valorNovo = saldo 
    };
      
    valorNovo = saldo - saque;     
        
    return valorNovo; 
}; 

export function exibirSaldo(saldo) {
    let x = saldo.toFixed(2);
    mensagemTexto(`\nSeu saldo atual é: R$${x}\n`);
};

//Não compreendi, mas fiz o cálculo.
export function jurosComposto(saldo) {
    let valorNovo = saldo * ((1 + 0.06 )**3);
    return valorNovo;
};