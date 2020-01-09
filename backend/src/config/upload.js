const multer = require('multer');
// Biblioteca nativa do node, formata caminhos entre ambiente linux e windows
const path = require('path');

module.exports = {
// Configuração o destino que as imagens upadas serão salvas e o seu devido nome.
	storage: new multer.diskStorage({
		destination: path.resolve(__dirname, '..', '..', 'uploads'),
		filename: function(req, file, callback){
			callback(null, file.originalname);
		}
	})
}

