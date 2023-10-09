import { handleErrors } from "../db/errors.js";
import { favoritesModel } from "./favorites.model.js";

const getAll = async (req, res) => {
    const id_user = req.id_user
    try {
        const result = await favoritesModel.findAll(id_user);
        return res.status(200).json({ ok: true, result })
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};

const getOne = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await favoritesModel.findOne(id);
        return res.status(200).json({ ok: true, result })
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};

const create = async (req, res) => {
    const { id_classes } = req.body;
    const id_user = req.id_user
    try {
        const result = await favoritesModel.create({ id_user, id_classes });
        return res.status(201).json({ ok: true, result });
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};

const remove = async (req, res) => {
    const { id } = req.params;
    const id_user = req.id_user
    try {
        // const look = await favoritesModel.findOne(id);
        // if (!look) {
        //     throw { code: "404" }
        // }
        // if (look.id_user !== id_user) {
        //     throw { code: "1111" }
        // }
        const result = await favoritesModel.remove(id_user, id);
        return res.status(200).json({ ok: true, result });
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};

export const favoritesController = {
    getAll,
    getOne,
    create,
    remove,
};