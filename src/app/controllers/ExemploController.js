import Exemplo from '../models/Exemplo';

class ExemploController {
    async index(req, res) {
        const exemplos = await Exemplo.findAll();
		return res.json(exemplos);
    }
    
    async show(req, res) {
        const exemplo = await Exemplo.findByPk(req.params.id);
		return res.json(exemplo);
    }

    async store(req, res) {
        const exemplo = await Exemplo.create(req.body);
		return res.json(exemplo);
    }

    async update(req, res) {
        await Exemplo.update(req.body, {
            where: { id: req.params.id}
        });

        const exemplo = await Exemplo.findByPk(req.params.id);

        return res.json(exemplo);
    }

    async delete(req, res) {
        await Exemplo.destroy({ where: { id: req.params.id }});
        return res.status(200).send();
    }
}

export default new ExemploController();
