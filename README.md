# Registro de Entregas com Blockchain

Projeto acadêmico em Node.js que demonstra:
- geração de hash SHA-256 para cada bloco;
- encadeamento por meio do hash anterior;
- validação da integridade da cadeia;
- validação dos dados de entrega;
- detecção de adulteração.

## Requisitos

- Node.js instalado.

Não é necessário instalar dependências externas. O projeto utiliza apenas o módulo nativo `crypto`.

## Como executar

1. Extraia a pasta `registro-entregas`.
2. Abra um terminal dentro da pasta.
3. Execute:

   ```bash
   node principal.js
   ```

## Arquivos

- `bloco.js`: classe Bloco, validações e cálculo do hash.
- `blockchain.js`: classe Blockchain, criação do bloco gênese, inclusão e validação dos blocos.
- `principal.js`: cadastro de entregas, impressão, teste de erro e demonstração de adulteração.

## Resultado esperado

A cadeia começa válida (`true`), continua válida após a tentativa de cadastro inválido (`true`) e passa a ser inválida após a adulteração dos dados de um bloco (`false`).
