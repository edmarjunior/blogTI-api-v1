import Conteudo from "../models/Conteudo";
import ComentarioConteudo from "../models/ComentarioConteudo";
import Usuario from "../models/Usuario";

class ComentarioConteudoController {
    async store(req, res) {
        const { idConteudo } = req.params;

        /* validando se o conteúdo existe */

        const conteudo = await Conteudo.findByPk(idConteudo);

        if (!conteudo) {
            return res.status(400).json({ message: 'Conteúdo não encontrado' });
        }

        const { id_comentario_superior, descricao } = req.body;

        if (id_comentario_superior) {

            /* validando se o comentario superior existe */

            const conteudoSuperior = await ComentarioConteudo.findByPk(id_comentario_superior);

            if (!conteudoSuperior) {
                return res.status(400).json({ 
                    message: 'Não foi possivel responder, pois não foi encontrado o comentário a ser respondido' 
                });
            }
        }

        const comentario = await ComentarioConteudo.create({
            conteudo_id: idConteudo,
            id_comentario_superior,
            descricao,
            usuario_id: req.idUsuario,
        });

        return res.json(comentario);
    };
    
    async show(req, res) {
        const { idConteudo } = req.params;
        const { user_id } = req.headers;

        /* validando se o conteúdo existe */

        const conteudo = await Conteudo.findByPk(idConteudo);

        if (!conteudo) {
            return res.status(400).json({ message: 'Conteúdo não encontrado' });
        }

        /* buscando os comentários e respostas */

        const comentariosERespostas = await ComentarioConteudo.findAll({
            include: [
                {
                    model: Usuario,
                    as: 'usuario',
                    attributes: ['id', 'nome', 'avatar_url'],
                }
            ],
            where: { conteudo_id: idConteudo },
            order: [
                ['data_cadastro', 'DESC']
            ]
        });

        if (!comentariosERespostas) {
            return res.json({ comentarios: []});
        }

        /* filtrando somente os COMENTARIOS */

        let comentarios = comentariosERespostas
            .filter(item => !item.id_comentario_superior)
            .map(comentario => ({
                ...comentario.dataValues,
                permite_editar: !!user_id && +user_id === comentario.usuario_id,
                respostas: [],
            }));

        /* filtrando somente as RESPOSTAS */
        
        const respostas = comentariosERespostas.filter(item => !!item.id_comentario_superior);

        // colocando as respostas dentro dos comentarios
        respostas.forEach(resposta => {
            comentarios
                .find(comentario => comentario.id === resposta.id_comentario_superior).respostas.push({
                    ...resposta.dataValues,
                    permite_editar: !!user_id && +user_id === resposta.usuario_id,
                });
        });

        return res.json({
            comentarios
        });
    }

    async update(req, res) {
        const { id } = req.params;
        const { descricao } = req.body;

        const comentario = await ComentarioConteudo.findByPk(id);

        if (!comentario) {
            return res.status(400).json({ message: 'Comentário ou resposta não encontrado.' });
        }

        if (comentario.usuario_id !== req.idUsuario) {
            return res.status(400).json({ message: 'Você não tem permissão para editar comentários de outros usuários' });
        }

        await comentario.update({ descricao });

        return res.json(comentario);
    }
}

export default new ComentarioConteudoController();
