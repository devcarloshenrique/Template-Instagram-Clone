// Sempre que a sintaxe jsx for utilizada é necessário importar á biblíoteca react
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New'


// Retornando componente
function Routes() {
	return (
	//Switch garante que o usuario cairá na rota correta 
		<Switch>
			<Route path="/" exact component={ Feed } />
			<Route path="/new" component={ New } />
		</Switch>
	); 
}

export default Routes;