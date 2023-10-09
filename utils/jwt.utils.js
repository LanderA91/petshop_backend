import * as dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

export const signJWT = ({ email }) => {
  try {
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    return token;

  } catch (error) {
    console.log(error);
    throw { code: error.code };
  }
}