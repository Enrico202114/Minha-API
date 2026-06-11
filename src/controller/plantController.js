import plantModel from require('../model/plantModel');

const getAll = async (req, res) => {
    const plants = await plantModel.getAll();

    return res.status(200).json(plants);
};

const create = async (req, res) => {
    const plants = await plantModel.create(req, body);

    return res.status(201).json(creatdPlant);
};

const remove = async (req, res) => {
    const {id} = req.params;

    await plantModel.remove(id);
    return res.status(204).end();
};

export {
    getAll,
    create,
    remove
}