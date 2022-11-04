const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get('/',(req, res) => {
  res.send('hello world');
});

const mensagens = [
  'primeira mensagem','segunda mensagem',"terceira mensagem"
];

// - [GET] /mensagens - Retorna a lista de mensagens
app.get('/mensagens',(req, res) => {
                     //só exibe mensagens que tem informação
  res.send(mensagens.filter(Boolean));
});

// - [GET] /mensagens/{id} - Retorna apenas uma unica mensagem pelo ID
app.get('/mensagens/:id',(req, res) => {
  const id = req.params.id - 1;

  const mensagem = mensagens[id];

  res.send(mensagem);
});

// - [POST] /mensagens - Cria uma nova mensagem
app.post('/mensagens',(req, res) => {
  const mensagem = req.body.mensagem;

  mensagens.push(mensagem);
  
  res.send(`Mensagem criada com sucesso: '${mensagem}'`);
});

// - [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
app.put('/mensagens/:id',(req, res) => {
  const id = req.params.id - 1;

  const mensagem = req.body.mensagem;

  mensagens[id] = mensagem;

  res.send(`Mensagem atualizada com sucesso: '${mensagem}.'`);
});

// - [DELETE] /mensagens/{id} - Deleta uma mensagem pelo ID
app.delete('/mensagens/:id',(req, res) => {
  const id = req.params.id - 1;

  delete mensagens[id] 

  res.send('Mensagem deletada com sucesso.');
});

app.listen(port, () => {
    console.info(`app rodando em http://localhost:${port}`);
});