import { Router } from 'express';

import authMiddleware from "./app/middlewares/auth";

import ConteudoController from './app/controllers/ConteudoController';
import UsuarioController from './app/controllers/UsuarioController';
import CurtidaConteudoController from './app/controllers/CurtidaConteudoController';

const routes = new Router();

routes.get('/ping', (req, res) =>
	res.json({ status: 'Ok', hour: new Date().toLocaleTimeString(), })
);

// conteúdos
routes.get('/conteudos/', ConteudoController.index);
routes.get('/conteudos/:id', ConteudoController.show);

// usuarios
routes.post('/usuarios', UsuarioController.store)

/** AUTENTICAÇÃO */
routes.use(authMiddleware);

// curtidas
routes.post('/curtida-conteudo/:idConteudo', CurtidaConteudoController.store)

export default routes;
