import Usuario from "../models/Usuario";

class UsuarioController {
    async store(req, res) {
        const { email, nome } = req.body;

        const usuario = await Usuario.findOne({
            where: {
                email: email
            }
        });

        if (usuario) {
            return res.json({
                usuario,
                token: usuario.generateJwt()
            });
        }

        const novoUsuario = await Usuario.create({
            email,
            nome
        });

        return res.json({
            usuario: novoUsuario,
            token: novoUsuario.generateJwt()
        });
    }
}

export default new UsuarioController();