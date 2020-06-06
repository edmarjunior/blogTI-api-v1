
module.exports = {
  up: queryInterface => {
    return queryInterface.sequelize.query("UPDATE conteudos SET data_publicacao='2020-05-24T03:00:00.000Z' WHERE id=1");
  },

  down: queryInterface => {
    return queryInterface.sequelize.query("UPDATE conteudos SET data_publicacao=null WHERE id=1");
  }
};
