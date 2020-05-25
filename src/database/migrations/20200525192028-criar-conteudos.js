'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('conteudos', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        assunto: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        titulo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('conteudos');
  }
};
