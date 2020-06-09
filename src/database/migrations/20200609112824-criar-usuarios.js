
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('usuarios', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        data_cadastro: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
  },

  down: queryInterface => {
      return queryInterface.dropTable('usuarios');
  }
};
