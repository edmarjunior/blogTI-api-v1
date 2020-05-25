import axios from 'axios';
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

        if (conteudo == null)
        {
            return res.status(401).json({ message: 'Conteúdo não encontrado' });
        }

        const { ip } = req.headers;

        if (!ip) {
            return res.json(conteudo);
        }

        const response = await axios.get(`http://ip-api.com/json/${ip}`)

        const { countryCode, region, city, lat, lon } = response.data;

        // gravando acesso
        await AcessoConteudo.create({
            conteudo_id: id,
            localizacao: JSON.stringify({ ip, countryCode, region, city, lat, lon }),
            data: new Date(),
        });

        return res.json(conteudo);
    }
}

export default new ConteudoController();