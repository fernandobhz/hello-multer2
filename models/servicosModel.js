const lista = require("../arquivos/servicos.json");

exports.adicionarItens = itens => lista.push(...itens);

exports.retornarLista = () => lista;