const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get('/',(req, res) => {
  res.send('hello world');
});

const mensagens = [
  'primeira mensagem','segunda mensagem'
];

// - [GET] /mensagens - Retorna a lista de mensagens
app.get('/mensagens',(req, res) => {
  res.send(mensagens);
});

// - [GET] /mensagens/{id} - Retorna apenas uma unica mensagem pelo ID
app.get('/mensagens:id',(req, res) => {
  const id = req.params.id - 1;

  const mensagem = mensagens[id];

  res.send(mensagem);
});

// - [post] /mensagens - Cria uma nova mensagens
app.post('/mensagens',(req, res) => {
  const mensagem = req.body.mensagem;

  mensagens.push(mensagem);
  
  res.send(`Mensagem criada com sucesso: '${mensagem}'`);
});

// - [GET] /mensagens/{id} - Atualiza uma mensagem pelo ID
app.put('/mensagens:id',(req, res) => {
  const id = req.params.id - 1;

  const mensagem = req.body.mensagem;

  mensagens[id] = mensagem;

  res.send(`Mensagem atualizada com sucesso: '${mensagem}.'`);
});

app.listen(port, () => {
    console.info(`app rodando em http://localhost:${port}`);
});