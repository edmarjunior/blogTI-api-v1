import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Exemplo from '../app/models/Exemplo';
import Conteudo from '../app/models/Conteudo';
import AcessoConteudo from '../app/models/AcessoConteudo';

const models = [Exemplo, Conteudo, AcessoConteudo];

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
