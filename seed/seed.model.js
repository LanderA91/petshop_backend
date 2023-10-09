import { pool } from "../db/conn.js";
import fs from "fs";
import * as url from "url";
import path from "path";

export const runSeeder = async () => {
  const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
  const sql = fs
    .readFileSync(path.join(__dirname, "../db/query.sql"))
    .toString();
  return await pool.query(sql);
};