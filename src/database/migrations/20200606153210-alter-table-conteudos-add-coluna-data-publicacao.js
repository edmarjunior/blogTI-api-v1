
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('conteudos', 'data_publicacao', {
        type: Sequelize.DATE,
      });
  },

  down: queryInterface => {
      return queryInterface.removeColumn('conteudos', 'data_publicacao');
  }
};
