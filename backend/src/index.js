const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// Está função cria um servidor que é acessador pelo navegador. 
const app = express();

// Importar o http do node que permite nós trabalhar este protocolo.
const server = require('http').Server(app);

// Permite nossa aplicação trabalhar com protocolo web socket
const io = require('socket.io')(server);


// Coneção com banco
mongoose.connect('mongodb+srv://admin:admin@cluster0-c12ry.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
})

// Repassa a informação do |io| para todas as rotas
app.use((req, res, next) => {
	req.io = io;
	next();
})

// Qual quer aplicação poderar acessar o backend
app.use(cors());

// a pasta resized será acessada pelo dominio estatico
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

// importando declaraçãoes de rotas
app.use(require('./routes'));

// Porta, que o navegador vai acessar.
server.listen(80);



