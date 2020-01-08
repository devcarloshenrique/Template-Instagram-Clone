const express = require('express')
const mongoose = require('mongoose')


// Está função cria um servidor que é acessador pelo navegador. 
const app = express();

// Coneção com banco mongoose
mongoose.connect('mongodb+srv://admin:admin@cluster0-c12ry.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
})

app.use(require('./routes'));

// Porta, que o navegador vai acessar.
app.listen(80);




