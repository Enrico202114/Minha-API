import pool from '../config/db.js';

export const getAll = async () => {

    const query = `SELECT * FROM plants ORDER BY id_plantas;`    ;

    const result = await pool.query(query);

    return result.rows;
};

export const create = async (
    nome,
    preco,
    quantidade,
    id_tipos
) => {

    const query = `
        INSERT INTO plants
        (nome, preco, quantidade, id_tipos)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;

    const values = [
        nome,
        preco,
        quantidade,
        id_tipos
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
};

export const remove = async (id) => {
 const result = await pool.query(
        'DELETE FROM plants WHERE id_plantas = $1 RETURNING *',
        
        [id]
    );
    return result.rows[0];
};

export default {
    getAll,
    create,
    remove
};
