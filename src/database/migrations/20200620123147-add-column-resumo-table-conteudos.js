
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('conteudos', 'resumo', { 
        type: Sequelize.STRING(500),
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('conteudos', 'resumo');
  }
};
