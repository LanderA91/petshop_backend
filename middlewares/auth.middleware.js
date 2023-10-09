import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
 const authHeader = req.headers?.authorization;

 if(!authHeader){
  return res.status(401).json({ok:false, result: "Sin verificacion de token"});
 }
 
 const token = authHeader.split(" ")[1];;

 try {
  const {id} = jwt.verify(token, process.env.JWT_SECRET);
  req.id_user = id;
  next();
 } catch (error) {
  return res.status(401).json({ok:false, result: "Token Invalido"});
 }
}