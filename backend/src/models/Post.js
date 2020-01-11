const mongoose = require('mongoose')

// representação da tabela da base de dados em formato javascrip
const PostSchema = new mongoose.Schema({
	author: String,
	place: String,
	description: String,
	hashtags: String,
	image: String,
	likes: {
		type: Number,
		default: 0,
	}
},	{
	timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);