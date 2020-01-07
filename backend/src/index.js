const express = require('express')

// Está função cria um servidor que é acessador pelo navegador. 
const app = express();

//app.get é uma Rota. toda função que tem req e res é um middle 
//middle é um interceptador de chamada de requisições.
app.get('/', (req, res) => {
    return res.send('Hello Word')
})


// Porta, que o navegador vai acessar.
app.listen(80);




