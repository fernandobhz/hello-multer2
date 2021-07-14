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

  debugger;
  console.log(fileContents);
  debugger;
  
  let fileArray;
  try {
    fileArray = JSON.parse(fileContents);
  } catch(error) {
    throw new Error("Não consegui fazer a interpretação do arquivo, favor usar formato json");
  }

  fs.unlinkSync(file.path);

  servicosModel.adicionarItens(fileArray);
}

exports.ultimoArquivo = () => JSON.stringify(servicosModel.retornarLista(), null, 2);
