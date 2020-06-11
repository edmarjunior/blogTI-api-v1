
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('usuarios', 'avatar_url', {
         type: Sequelize.STRING,
      });
  },

  down: queryInterface => {
      return queryInterface.removeColumn('usuarios', 'avatar_url');
  }
};
