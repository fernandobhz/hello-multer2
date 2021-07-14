const express = require('express');
const router = express.Router();

const multer = require("multer");
const upload = multer({dest: 'uploads/'});

const servicosController = require('../controller/servicosController');

router.get('/', function(req, res, next) {
  const lista = servicosController.retornarLista();
  res.render('index', { title: 'Express', lista });
});

router.post('/', upload.single('certidao_nascimento'),  function(req, res) {
  const lista = servicosController.retornarLista();
  servicosController.importarLista(req.file);
  res.render('index', { title: 'Express', lista });
});

router.get('/download-lista', (req, res) => {
  res.header('Content-Disposition', 'inline');
  res.header('Content-Disposition', 'attachment');
  res.header('Content-Disposition', 'attachment; filename="lista-servico.json');
  res.end(servicosController.ultimoArquivo);
});

module.exports = router;
