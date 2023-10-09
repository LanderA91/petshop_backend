import { handleErrors } from "../db/errors.js";
import { salesModel } from "./sales.model.js";

 const getAll = async (req, res) => {
     try {
         const result = await salesModel.findAll();
         return res.status(200).json({ ok: true, result })
     } catch (error) {
         const { status, message } = handleErrors(error.code);
         return res.status(status).json({ ok: false, result: message })
     }
 };

const create = async (req, res) => {
    const { total } = req.body;
    const id_user = req.id_user;
    try {
        const result = await salesModel.create({ id_user, total });
        return res.status(201).json({ ok: true, result });
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};

export const salesController = {
    getAll,
    create
};