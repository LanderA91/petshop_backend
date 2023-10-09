import { handleErrors } from "../db/errors.js";
import { ratingsModel } from "./ratings.model.js";

const getClassAvgRating = async (req, res) => {
    const { id } = req.params;

    try {
        const classRating = await ratingsModel.findClassRating(id);
        return res.status(200).json({ ok: true, classRating })
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};

const getUserAvgRating = async (req, res) => {
    
    const id_user = req.id_user;
    console.log(id_user)
    try {
        const userAvgRating = await ratingsModel.getUserRating(id_user);
        return res.status(200).json({ ok: true, userAvgRating })
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};

const create = async (req, res) => {
    const { id_classes, rating } = req.body;
    const id_user = req.id_user
    try {
        const result = await ratingsModel.create({ id_user, id_classes, rating });
        return res.status(201).json({ ok: true, result });
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};


export const ratingsController = {
    getClassAvgRating,
    getUserAvgRating,
    create
};