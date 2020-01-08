const express = require('express');

const routes = new express.Router();

//routes.get é uma Rota. toda função que tem req e res é um middle 
//middle é um interceptador de chamada de requisições.
routes.get('/', (req, res) => {
		// Eviando uma resposta
    return res.send(`Ola ${req.query.name}`);
})


module.exports = routes;