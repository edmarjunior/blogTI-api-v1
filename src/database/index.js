import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Exemplo from '../app/models/Exemplo';
import Conteudo from '../app/models/Conteudo';
import AcessoConteudo from '../app/models/AcessoConteudo';
import Usuario from '../app/models/Usuario';
import CurtidaConteudo from '../app/models/CurtidaConteudo';
import ComentarioConteudo from '../app/models/ComentarioConteudo';

const models = [Exemplo, Conteudo, AcessoConteudo, Usuario, CurtidaConteudo, ComentarioConteudo];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(databaseConfig);

		models.map(model => model.init(this.connection));

		models.forEach(model => {
			if (model.associate) model.associate(this.connection.models);
		});
	}
}

export default new Database();
