import Usuario from "../models/Usuario";

class UsuarioController {
    async store(req, res) {
        const { email, nome, avatar_url } = req.body;

        let usuario = await Usuario.findOne({
            where: {
                email: email
            }
        });

        if (usuario) {
            usuario.nome = nome;
            usuario.avatar_url = avatar_url;

            await usuario.update();
            
            return res.json({
                ...usuario.dataValues,
                token: usuario.generateJwt()
            });
        }

        const novoUsuario = await Usuario.create({
            email,
            nome,
            avatar_url,
        });

        return res.json({
            ...novoUsuario.dataValues,
            token: novoUsuario.generateJwt()
        });
    }
}

export default new UsuarioController();