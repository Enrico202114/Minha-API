import db from '../config/db.js';
export const getAll = async () => {

    const query = `
        SELECT * FROM plantas
        ORDER BY id_plantas;
    `;

    const result = await db.query(query);

    return result.rows;
};

export const create = async (
    nome,
    preco,
    quantidade,
    id_tipos
) => {

    const query = `
        INSERT INTO plantas
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

    const result = await db.query(query, values);

    return result.rows[0];
};

export const remove = async (id) => {
 const result = await pool.query(
        'DELETE FROM plantas WHERE id_plantas = $1 RETURNING *',
        
        [id]
    );
    return result.rows[0];
};
