
module.exports = {
  up: queryInterface => {
    const resumo = 'Neste post irei abordar como criar uma CLI (interface de linha de comando) em node.js, o conteúdo será para iniciante ' +
    'no assunto, nossa aplicação será bem simples, porém servirá de base para entendermos alguns conceitos. Em futuros post\'\'s, ' +
    'pretendo criar uma outra CLI com uma utilidade mais aplicável na concepção de novos projetos.';

    return queryInterface.sequelize.query(`UPDATE conteudos SET resumo = '${resumo}' WHERE id = 1`);
  },

  down: queryInterface => {
    return queryInterface.sequelize.query(`UPDATE conteudos SET resumo = null WHERE id = 1`);
  }
};
