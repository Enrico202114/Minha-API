const connection = require('../config/db');

const getAll = async () => {
    cont [plants] =await connection.execute(
        'select  * from plants'
    );

    return plants;
};

const create = async (plants) => {
    const {name} = plants;

    const query ='insert into plants (name) values (?)';

    const [createdPlant] = await connection.execute(
        query,
        [name]
    );

    return createdPlant;
};

const remove = async (id) => {
    const query = 'delete from plants where id =?';

    await connection.execute(query, [id]);
};

export {
    getAll,
    create,
    remove
}