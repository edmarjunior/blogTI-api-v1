import { Router } from 'express';

import authMiddleware from "./app/middlewares/auth";

import ConteudoController from './app/controllers/ConteudoController';
import UsuarioController from './app/controllers/UsuarioController';
import CurtidaConteudoController from './app/controllers/CurtidaConteudoController';
import ComentarioConteudoController from './app/controllers/ComentarioConteudoController';

const routes = new Router();

routes.get('/ping', (req, res) =>
	res.json({ status: 'Ok', hour: new Date().toLocaleTimeString(), })
);

// conteúdos
routes.get('/conteudos/', ConteudoController.index);
routes.get('/conteudos/:id', ConteudoController.show);
routes.get('/conteudos/:idConteudo/comentarios', ComentarioConteudoController.show);

// usuarios
routes.post('/usuarios', UsuarioController.store);

/** AUTENTICAÇÃO */
routes.use(authMiddleware);

// curtidas
routes.post('/curtida-conteudo/:idConteudo', CurtidaConteudoController.store);

// comentarios
routes.post('/conteudos/:idConteudo/comentarios', ComentarioConteudoController.store);
routes.put('/comentarios/:id', ComentarioConteudoController.update);

export default routes;
