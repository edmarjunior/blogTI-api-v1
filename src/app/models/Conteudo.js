import Sequelize, { Model } from 'sequelize';

class Conteudo extends Model {
    static init(sequelize) {
        super.init(
            {
                assunto: Sequelize.STRING,
                titulo: Sequelize.STRING,
                data_publicacao: Sequelize.DATE,
            },
            { sequelize }
        );

        return this;
    }
}

export default Conteudo;
