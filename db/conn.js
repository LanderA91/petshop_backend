import * as dotenv from "dotenv";
dotenv.config();

import pkg from "pg";
const { Pool } = pkg;

const connectionString = process.env.PG_URL;

export const pool = connectionString ?
    new Pool({
        connectionString,
        ssl: {
            rejectUnauthorized: false,
        },
        allowExitOnIdle: true
    }) : new Pool({
        allowExitOnIdle: true
    });

try {
   
    const res = await pool.query("SELECT NOW()");
  
    console.log(
        "Conexión exitosa. Hora actual en la base de datos:",
        res.rows[0].now
    );
} catch (error) {
    console.log(error);
}