import { pool } from "../db/conn.js";

const findAll = async () => {
    const { rows } = await pool.query("select * from comments");
    return rows;
};

const findOne = async (id) => {
    const query = "select * from comments WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

const findByIdClass = async (id_classes) => {
    const query = "SELECT u.name, u.lastname, u.img_avatar,c.id, c.comment, c.date, r.rating  FROM ratings r INNER JOIN comments c ON (r.id_classes=c.id_classes AND r.id_user = c.id_user) INNER JOIN users u ON r.id_user = u.id WHERE c.id_classes=$1";
    const { rows } = await pool.query(query, [id_classes]);
    return rows;
}

const create = async ({ id_user, id_classes, comment }) => {
    const query = "INSERT INTO comments (id_user, id_classes, comment)VAlUES($1,$2,$3) RETURNING *";
    const { rows } = await pool.query(query, [id_user, id_classes, comment]);
    return rows[0];
};

export const commentsModel = {
    findAll,
    findOne,
    create,
    findByIdClass
};