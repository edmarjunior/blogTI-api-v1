import Sequelize, { Model } from 'sequelize';

class AcessoConteudo extends Model {
	static init(sequelize) {
		super.init(
			{
                conteudo_id: Sequelize.INTEGER,
                localizacao: Sequelize.STRING,
                data: Sequelize.DATE,
			},
			{ sequelize }
		);
		
		return this;
    }
    
    static associate(models) {
		this.belongsTo(models.Conteudo, {
			foreignKey: 'conteudo_id',
			as: 'conteudo',
		});
	}
}

export default AcessoConteudo;
