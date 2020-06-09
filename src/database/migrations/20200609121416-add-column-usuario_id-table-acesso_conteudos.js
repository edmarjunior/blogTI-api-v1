
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('acesso_conteudos', 'usuario_id', { 
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'usuarios',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
       });
  },

  down: queryInterface => {
      return queryInterface.removeColumn('acesso_conteudos', 'usuario_id');
  }
};
