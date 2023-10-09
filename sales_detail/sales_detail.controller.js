import { handleErrors } from "../db/errors.js";
import { sales_detailModel } from "./sales_detail.model.js";

const create = async (req, res) => {
    const { id_classes, id_sales, amount, price } = req.body;

    try {
        const result = await sales_detailModel.create({ id_classes, id_sales, amount, price });
        return res.status(201).json({ ok: true, result });
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code);
        return res.status(status).json({ ok: false, result: message })
    }
};

export const sales_detailController = {
    create
};