import bcript from "bcryptjs"
import jwt from "jsonwebtoken";

import { handleErrors } from "../db/errors.js";
import { userModel } from "./user.model.js";

const getAll = async (req, res) => {
    try {
        const result = await userModel.findAll();
        /*
        const newResult = result.map((item) => {
            const { password, ...rest } = item;
            return rest;
        });
        */
        return res.status(200).json({ ok: true, result: result })
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};

const getProfile = async (req, res) => {
    const id_user = req.id_user;
    try {
        const result = await userModel.findProfile(id_user);
        const { password: _, ...newResult } = result;
        return res.status(200).json({ ok: true, result: newResult })
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};

const getOne = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userModel.findOne(id);
        if (!result) {
            throw { code: 404, message: "No se encontró usuario con estas credenciales" }
        }
        const { password: _, ...newResult } = result;
        return res.status(200).json({ ok: true, result: newResult })
    } catch (error) {
        const { message } = handleErrors(error.code);
        return res.status(error.code || 500).json({ ok: false, result: error.message || "" })
    }
};

const getLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findLogin(email);
        if (!user) {
            return res.status(400).json({ ok: false, result: "Correo invalido" })
        }
        const isMatch = bcript.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ ok: false, result: "Contrasena invalida" })
        }
        const userId = user.id
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

        return res.status(200).json({ ok: true, token, email, userId })
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};


const create = async (req, res) => {
    const { name, lastName, email, password, img_avatar } = req.body;

    try {
        const result = await userModel.create({ name, lastName, email, password: bcript.hashSync(password, 10), img_avatar });
        const { password: _, ...newResult } = result;
        return res.status(201).json({ ok: true, result: newResult });
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    const { name, lastName, email, password, img_avatar } = req.body;
    try {
        const result = await userModel.update(id, { name, lastName, email, password: bcript.hashSync(password, 10), img_avatar });
        const { password: _, ...newResult } = result;
        return res.status(200).json({ ok: true, result: newResult });
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};

const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userModel.remove(id);
        const { password: _, ...newResult } = result;
        return res.status(200).json({ ok: true, result: newResult });
    } catch (error) {
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};

export const userController = {
    getAll,
    getProfile,
    getOne,
    getLogin,
    create,
    update,
    remove,
};