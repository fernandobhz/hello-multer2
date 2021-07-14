const fs = require("fs");

let ultimoArquivoImportado;
let dadosUltimoArquivo;

const servicosModel = require("../models/servicosModel");

exports.adicionarItens = (itens) => servicosModel.adicionarItens(itens);

exports.retornarLista = () => servicosModel.retornarLista();

exports.importarLista = file => {
  ultimoArquivoImportado = file;
  const fileContents = fs.readFileSync(file.path);
  dadosUltimoArquivo = fileContents;

  const fileArray = JSON.parse(fileContents);
  fs.unlinkSync(file.path);

  servicosModel.adicionarItens(fileArray);
}

exports.ultimoArquivo = () => JSON.stringify(servicosModel.retornarLista(), null, 2);
