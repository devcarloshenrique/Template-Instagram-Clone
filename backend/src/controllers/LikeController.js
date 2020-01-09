const Post = require('../models/Post');

// Adiciona um like em uma determinada foto, (obs: like pode ser realizado mais de uma vez)
module.exports = {
	async store(req, res) {

		const post = await Post.findById(req.params.id);

		post.likes += 1

		await post.save();

		req.io.emit('like', post);

		return res.json(post);
	}
};