import prompt from 'prompt-sync';
let ler = prompt();

export function menu() {
    console.log(`Escolha uma opção:
    1. Depositar;
    2. Sacar;
    3. Exibir o Saldo;
    4. Juros composto;
    5. Sair.
    `);
    let escolha = ler();

    return escolha;
};