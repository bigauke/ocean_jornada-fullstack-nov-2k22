const express = require('express');
const app = express();

// sinalizamos que estamos usando JSON no body
app.use(express.json());

app.get('/', function(req, res){
    res.send("Hello World!!!!!!");
});

app.get('/oi', function(req, res){
    res.send('teste oi')
});

// Lista de informações
const itens = ["Café Pelé", "Café Pilão", "Café Arábico"];


// Endpoint [GET] /itens READ ALL 
app.get('/itens', function(req, res) {
    res.send(itens);
});

// Endpoint [POST] /itens CREATE
app.post('/itens', function(req, res){
    // console.log(req.body)

    // Pegamos o nome enviado no body
    const item = req.body.nome;

    // inserimos o valor recebido na lista
    itens.push(item);

    res.send("item criado com sucesso!");     
    });

    // Endpoint [GET] /itens/:id - READ BY ID
    app.get("/itens/:id", function(req, res){
        //pegamos o parâmetro de rota ID
        const id = req.params.id -1;

        //acessamos o item pelo índice
        const item = itens[id];

        // exibimoso item encontrado
        res.send(item);
});

app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000");
});