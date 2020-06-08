
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('acesso_conteudos', 'ip', { 
        type: Sequelize.STRING,
      });
  },

  down: queryInterface => {
      return queryInterface.removeColumn('acesso_conteudos', 'ip');
  }
};
