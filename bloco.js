const crypto = require('crypto');

class Bloco {
    constructor(indice, dados, hashAnterior) {
        // Validação do índice
        if (typeof indice !== 'number' || !Number.isInteger(indice) || indice < 0) {
            throw new Error('O índice deve ser um número inteiro não negativo.');
        }

        // Validação dos dados
        if (typeof dados !== 'string' || dados.trim().length === 0) {
            throw new Error('Os dados da entrega são obrigatórios.');
        }

        if (dados.length < 3) {
            throw new Error('Os dados devem possuir no mínimo 3 caracteres.');
        }

        if (dados.length > 80) {
            throw new Error('Os dados devem possuir no máximo 80 caracteres.');
        }

        // Validação do hash anterior
        if (typeof hashAnterior !== 'string' || hashAnterior.length === 0) {
            throw new Error('O hash anterior deve ser uma string válida.');
        }

        this.indice = indice;
        this.dados = dados;
        this.hashAnterior = hashAnterior;

        // O hash é calculado pelo próprio bloco
        this.hash = this.calcularHash();
    }

    calcularHash() {
        const texto = this.indice + this.dados + this.hashAnterior;

        return crypto
            .createHash('sha256')
            .update(texto)
            .digest('hex');
    }
}

module.exports = Bloco;
