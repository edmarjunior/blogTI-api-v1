import Sequelize, { Model } from "sequelize";

class CurtidaConteudo extends Model {
    static init(sequelize) {
        super.init(
            {
                data_cadastro: Sequelize.DATE,
            },
            { sequelize }
        );

        this.addHook('beforeSave', async usuario => {
            usuario.data_cadastro = new Date();
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Conteudo, {
            foreignKey: 'conteudo_id',
            as: 'conteudo',
        });

        this.belongsTo(models.Usuario, {
            foreignKey: 'usuario_id',
            as: 'usuario',
        })
    }
}

export default CurtidaConteudo;
