const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
	// Retorna todos os post ordenados pela data de criação em json
	async index(req, res){
		const posts = await Post.find().sort('-createdAt');

		return res.json(posts);
	},

		// Recebe os dados dos arquivos, e os dados restantes do post 
	async store(req, res) {
		const { author, place, description, hashtags } = req.body;
		const { filename: image } = req.file; 

		const [name] = image.split('.')
		const fileName = `${name}.jpg`; 

		// a depêndencia sharp é responsável por redimêncionar e diminuir a qualidade da imagem upada 
		await sharp(req.file.path)
			.resize(500)
			.jpeg({ quality: 70})
			.toFile(
				path.resolve(req.file.destination, 'resized', fileName)
			)

		// Delete o arquivo original
		fs.unlinkSync(req.file.path);

		// Salva os dados acima no banco de dados 
		const post = await Post.create({
			author,
			place,
			description,
			hashtags,
			fileName
		});

		// Enviar uma informação em tempo real por meio do |io| do tipo post com todos os dados do |post|
		// Possibilitando o react e o react nativo vai poder acessar essa informação em tempo real 
		req.io.emit('post', post);

		return res.json(post);
	}
};