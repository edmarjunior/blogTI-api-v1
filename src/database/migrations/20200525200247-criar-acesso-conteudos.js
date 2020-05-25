'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('acesso_conteudos', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        conteudo_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
						model: 'conteudos',
						key: 'id',
					},
					onUpdate: 'CASCADE',
					onDelete: 'SET NULL',
        },
        localizacao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: queryInterface => {
      return queryInterface.dropTable('acesso-conteudos');
  }
};
