const express = require('express');
//trazer o mongodb para a aplicação
const { MongoClient, ObjectId } = require("mongodb");

//estabelecer conexão com o bd
const url = "mongodb://localhost:27017";
const bancoDadosNome = "ocean_jornada_fullstack_novembro_22";

const client =  MongoClient.connect(url);


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
    res.send(itens.filter(Boolean));
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

        // exibimos o item encontrado
        res.send(item);
});

// Endpoint [PUT] /itens/:id - UPDATE BY ID
app.put("itens/:id", function(req, res) {
    // pegamos o parâmetro de rota ID
    const id = req.params.id -1;

    // pegamos o nome eniado no body
    const item = req.body.nome;

    //atualizamos com o novo item, na posição ID da lista de itens
    itens[id] = item

    res.send("item atualizado com sucesso!!");
});

// Endpoint [DELETE] /itens/:id - DELETE BY ID
app.delete("/itens/:id", function(req, res) {
    // pegamos o parametro de rota id
    const id = req.params.id - 1;

    //remove o item da lista
    delete itens[id];

    //exibimos uma mensagem de sucesso
    res.send("item removido com sucesso!");
});

app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000");
});