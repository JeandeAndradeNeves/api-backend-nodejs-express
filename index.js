const express = require('express');
const app = express();

const port = 3000;

app.get('/',(req, res) => {
  res.send('hello world');
});

const mensagens = [
  'primeira mensagem','segunda mensagem'
];
// - [GET] /mensagens - retorna a lista de mensagens
app.get('/mensagens',(req, res) => {
  res.send(mensagens);
});

// - [GET] /mensagens/{id} - retorna apenas uma unica mensagem pelo id
app.get('/mensagens:id',(req, res) => {
  const id = req.params.id - 1;

  const mensagem = mensagens[id];

  res.send(mensagem);
});

app.listen(port, () => {
    console.info(`app rodando em http://localhost:${port}`);
});