'use strict';

module.exports = {
  up: queryInterface => {
      return queryInterface.bulkInsert('conteudos', [{
        assunto: 'CLI',
        titulo: 'Como criar uma CLI em Node.js'
      }], {});
  },

  down: queryInterface => {
      return queryInterface.bulkDelete('conteudos', null, {});
  }
};
