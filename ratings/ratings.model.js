import { pool } from "../db/conn.js";

const getUserRating = async (id_user) => {
    const query = "SELECT classes.id_user as id_class_owner, ratings.id_user as favorited_by , ratings.id_classes,ratings.rating FROM ratings INNER JOIN classes on ratings.id_classes=classes.id WHERE classes.id_user=$1"
    const { rows } = await pool.query(query, [id_user])
    let userAverageRating = 0;
    if (rows.length > 0) {
        const userSumTotalRating = rows.reduce((accumulator, currentValue) => accumulator + currentValue.rating, 0);
        userAverageRating = userSumTotalRating / rows.length;
    }
    return userAverageRating
}

const findClassRating = async (id) => {
    const query = "select * from ratings WHERE id_classes = $1";
    const { rows } = await pool.query(query, [id]);
    const totalRating = rows.reduce((accumulator, currentValue) => accumulator + currentValue.rating, 0);
    const averageRating = totalRating / rows.length;

    return averageRating;
};

const create = async ({ id_user, id_classes, rating }) => {
    const query = "INSERT INTO ratings (id_user, id_classes, rating )VAlUES($1,$2,$3) RETURNING *";
    const { rows } = await pool.query(query, [id_user, id_classes, rating ]);
    return rows[0];
};


export const ratingsModel = {
    getUserRating,
    findClassRating,
    create
};