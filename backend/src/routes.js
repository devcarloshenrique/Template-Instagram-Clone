const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostControllers');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

// Lista todos os dados 
routes.get('/posts',PostController.index);

// a configuração do multer permite queo express entenda o corpo enviado pelo insonia no formato multipart form data
routes.post('/posts', upload.single('image'),PostController.store); 

// Adiciona likes 
routes.post('/posts/:id/like', LikeController.store)

module.exports = routes; 