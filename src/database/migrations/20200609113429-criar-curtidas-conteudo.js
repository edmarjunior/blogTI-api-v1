
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('curtida_conteudos', { 
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
        usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'usuarios',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        data_cadastro: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: queryInterface => {
      return queryInterface.dropTable('curtida_conteudos');
  }
};
