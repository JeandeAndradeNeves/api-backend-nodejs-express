const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get('/',(req, res) => {
  res.send('hello world');
});

const mensagens = [
  {
    "id":1,
    "texto":"primeira mensagem"
  },  
  { 
    "id":2,
    "texto":"segunda mensagem"
  },
  { 
    "id":3,
    "texto":"terceira mensagem"
  }    
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

        if(!mensagem){
            res.send('Mensagem não encontrada.');
   
            return;
        }

    res.send(mensagem);
});

// - [POST] /mensagens - Cria uma nova mensagem
app.post('/mensagens',(req, res) => {
    const mensagem = req.body;

    if (!mensagem || !mensagem.texto) {
      res.send('Mensagem inválida.');

      return;
  };

    mensagem.id = mensagens.length + 1;
    mensagens.push(mensagem);
  
    res.send(mensagem);
});

// - [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
app.put('/mensagens/:id',(req, res) => {
    const id = req.params.id - 1;
    
    const mensagem = mensagens[id];

    const novoTexto = req.body.texto;

    if (!novoTexto) {
      res.send('Mensagem inválida.');

      return;
  }

    mensagem.texto = novoTexto

    res.send(mensagem);
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