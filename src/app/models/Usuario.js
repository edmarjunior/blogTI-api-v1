import Sequelize, { Model } from "sequelize";
import jwt from 'jsonwebtoken';
import authConfig from "../../config/auth";

class Usuario extends Model {
    static init(sequelize) {
        super.init(
            {
                email: Sequelize.STRING,
                nome: Sequelize.STRING,
                data_cadastro: Sequelize.DATE,
            },
            { sequelize }
        );

        this.addHook('beforeSave', async usuario => {
            usuario.data_cadastro = new Date();
        });

        return this;
    }

    generateJwt() {
        return jwt.sign({ id: this.id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn
        })
    }
}

export default Usuario;
