import { pool } from "../db/conn.js";

const findAll = async (id_user) => {
    const query =
        "SELECT c.id as id_classes,c.level, c.name, c.description, c.price, c.img FROM favorites f INNER JOIN classes c ON f.id_classes = c.id WHERE f.id_user = $1";
    const { rows } = await pool.query(query, [id_user]);
    console.log(rows)
    return rows;
};

const findOne = async (id) => {
    const query = "select * from favorites WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

const create = async ({ id_user, id_classes }) => {
    const query = "INSERT INTO favorites (id_user, id_classes)VAlUES($1,$2) RETURNING *";
    const { rows } = await pool.query(query, [id_user, id_classes]);
    return rows[0];
};

const remove = async (id_user, id_classes) => {
    const query = "DELETE FROM favorites WHERE id_user = $1 AND id_classes=$2 RETURNING *";
    const { rows } = await pool.query(query, [id_user, id_classes]);
    return rows[0];
};

export const favoritesModel = {
    findAll,
    findOne,
    create,
    remove,
};