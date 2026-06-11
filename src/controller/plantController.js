import * as plantModel from '../model/plantModel.js';

export const getAll = async (req, res) => {
    try {

        const plantas = await plantModel.getAll();

        return res.status(200).json(plantas);

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            erro: 'Erro ao buscar plantas'
        });
    }
};

export const create = async (req, res) => {
    try {

        const { nome, preco, quantidade, id_tipos } = req.body;

        const planta = await plantModel.create(
            nome,
            preco,
            quantidade,
            id_tipos
        );

        return res.status(201).json(planta);

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            erro: 'Erro ao criar planta'
        });
    }
};

export const remove = async (req, res) => {
    try {

        const { id } = req.params;

        const plantaRemovida = await plantModel.remove(id);

        return res.status(200).json(plantaRemovida);

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            erro: 'Erro ao remover planta'
        });
    }
};