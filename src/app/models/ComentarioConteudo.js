import Sequelize, { Model } from "sequelize";

class ComentarioConteudo extends Model {
    static init(sequelize) {
        super.init(
            {
                descricao: Sequelize.STRING(1000),
                data_cadastro: Sequelize.DATE,
            },
            { sequelize }
        );

        this.addHook('beforeCreate', async comentario => {
            comentario.data_cadastro = new Date();
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Conteudo, { 
            foreignKey: 'conteudo_id', 
            as: 'conteudo',
        });
        
        this.belongsTo(models.ComentarioConteudo, { 
            foreignKey: 'id_comentario_superior', 
            as: 'comentario_superior',
        });

        this.belongsTo(models.Usuario, {
            foreignKey: 'usuario_id', 
            as: 'usuario',
        })
    }
}

export default ComentarioConteudo;