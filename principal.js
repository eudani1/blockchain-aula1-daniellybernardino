const Blockchain = require('./blockchain');

// Recebe um array de blocos e apenas apresenta seus dados
function imprimirCadeia(cadeia) {
    console.log('\n========== REGISTRO DE ENTREGAS ==========');

    for (const bloco of cadeia) {
        console.log(`\nÍndice: ${bloco.indice}`);
        console.log(`Dados: ${bloco.dados}`);
        console.log(`Hash: ${bloco.hash.slice(0, 10)}...`);
        console.log('------------------------------------------');
    }
}

// Criação da cadeia
const registro = new Blockchain();

// Cadastro de três entregas
registro.adicionar('Entrega E-001 para Ji-Paraná: em rota');
registro.adicionar('Entrega E-002 para Porto Velho: saiu para entrega');
registro.adicionar('Entrega E-003 para Cacoal: entregue');

// Exibição e validação inicial
imprimirCadeia(registro.cadeia);

console.log('\n========== VALIDAÇÃO INICIAL ==========');
console.log('A cadeia é válida?', registro.ehValida());

// Tentativa de cadastrar dados inválidos
console.log('\n========== TESTE DE DADOS INVÁLIDOS ==========');

try {
    registro.adicionar('Oi');
} catch (erro) {
    console.log('Erro ao cadastrar entrega:', erro.message);
}

console.log('A cadeia continua válida?', registro.ehValida());

// Adulteração de uma entrega antiga
console.log('\n========== TESTE DE ADULTERAÇÃO ==========');

registro.cadeia[1].dados = 'Entrega E-001 adulterada';

console.log('Os dados do bloco 1 foram modificados.');
imprimirCadeia(registro.cadeia);

console.log('\n========== VALIDAÇÃO APÓS ADULTERAÇÃO ==========');
console.log('A cadeia é válida após adulteração?', registro.ehValida());
