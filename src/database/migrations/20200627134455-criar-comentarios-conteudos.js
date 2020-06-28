module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('comentario_conteudos', 
        { 
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          conteudo_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'conteudos',
              key: 'id',
            }
          },
          id_comentario_superior: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
              model: 'comentario_conteudos',
              key: 'id',
            }
          },
          descricao: {
            type: Sequelize.STRING(1000),
            allowNull: false
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
        }
    );
  },

  down: queryInterface => {
      return queryInterface.dropTable('comentario_conteudos');
  }
};
