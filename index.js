const express = require('express');
const app = express();

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

app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000");
});