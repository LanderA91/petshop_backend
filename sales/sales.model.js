import { pool } from "../db/conn.js";

 const findAll = async () => {
     const { rows } = await pool.query("select * from sales");
     return rows;
 };

const create = async ({ id_user, total }) => {
    const query = "INSERT INTO sales (id_user, total)VAlUES($1,$2) RETURNING *";
    const { rows } = await pool.query(query, [id_user, total]);
    return rows[0];
};

export const salesModel = {
    findAll,
    create
};