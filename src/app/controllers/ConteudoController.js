import axios from 'axios';
import { addHours } from 'date-fns';

import Conteudo from "../models/Conteudo";
import AcessoConteudo from "../models/AcessoConteudo";

class ConteudoController {
    async index(req, res) {
        const conteudos = await Conteudo.findAll();
        return res.json(conteudos);
    }

    async show(req, res) {
        const { id } = req.params;

        const conteudo = await Conteudo.findByPk(id);

        if (conteudo == null) {
            return res.status(401).json({ message: 'Conteúdo não encontrado' });
        }

        const quantidade_acessos = await AcessoConteudo.count({ where: { conteudo_id: id }});

        const { ip } = req.headers;

        if (!ip || ip === '179.126.47.176' || ip === '189.112.203.1') {
            return res.json({...conteudo.dataValues, quantidade_acessos});
        }

        const ultimoAcesso = await AcessoConteudo.findOne({ 
            where: { ip }, 
            order: [
                ['data', 'DESC']
            ]
        });

        if (ultimoAcesso?.data) {
            const dataValidaNovoAcesso = addHours(ultimoAcesso.data, 1);

            if (new Date() < dataValidaNovoAcesso) {
                return res.json({...conteudo.dataValues, quantidade_acessos});
            }
        }

        const response = await axios.get(`http://ip-api.com/json/${ip}`)

        const { countryCode, region, city, lat, lon } = response.data;

        // gravando acesso
        await AcessoConteudo.create({
            conteudo_id: id,
            localizacao: JSON.stringify({ countryCode, region, city, lat, lon }),
            data: new Date(),
            ip,
        });

        return res.json({...conteudo.dataValues, quantidade_acessos: quantidade_acessos + 1});
    }
}

export default new ConteudoController();
