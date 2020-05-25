import { Router } from 'express';

import ExemploController from './app/controllers/ExemploController';
import ConteudoController from './app/controllers/ConteudoController';

const routes = new Router();

routes.get('/ping', (req, res) =>
	res.json({
		status_api: 'Ok',
		current_date: `${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString()}`,
	})
);

routes.get('/exemplos', ExemploController.index);
routes.get('/exemplos/:id', ExemploController.show);
routes.post('/exemplos', ExemploController.store);
routes.put('/exemplos/:id', ExemploController.update);
routes.delete('/exemplos/:id', ExemploController.delete);

// conteúdos
routes.get('/conteudos/', ConteudoController.index);
routes.get('/conteudos/:id', ConteudoController.show);

export default routes;
