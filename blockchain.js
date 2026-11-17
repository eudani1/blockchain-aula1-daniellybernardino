const Bloco = require('./bloco');

class Blockchain {
    constructor() {
        this.cadeia = [];

        // Criação do bloco gênese
        const genesis = new Bloco(0, 'Bloco gênese', '0');
        this.cadeia.push(genesis);
    }

    adicionar(dados) {
        const ultimoBloco = this.cadeia[this.cadeia.length - 1];

        const novoBloco = new Bloco(
            this.cadeia.length,
            dados,
            ultimoBloco.hash
        );

        // Só adiciona depois que o construtor valida os dados
        this.cadeia.push(novoBloco);
    }

    ehValida() {
        // Valida o bloco gênese
        if (
            this.cadeia.length === 0 ||
            this.cadeia[0].indice !== 0 ||
            this.cadeia[0].hashAnterior !== '0' ||
            this.cadeia[0].hash !== this.cadeia[0].calcularHash()
        ) {
            return false;
        }

        // Valida os demais blocos e seus encadeamentos
        for (let i = 1; i < this.cadeia.length; i++) {
            const blocoAtual = this.cadeia[i];
            const blocoAnterior = this.cadeia[i - 1];

            if (blocoAtual.hash !== blocoAtual.calcularHash()) {
                return false;
            }

            if (blocoAtual.hashAnterior !== blocoAnterior.hash) {
                return false;
            }

            if (blocoAtual.indice !== i) {
                return false;
            }
        }

        return true;
    }
}

module.exports = Blockchain;
