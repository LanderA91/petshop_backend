import Joi from "joi"

const createSchema = Joi.object({
    id_classes: Joi.number().integer().min(1).required(),
    id_sales  : Joi.number().integer().min(1).required(),
    amount    : Joi.number().integer().min(1).required(),
    price     : Joi.number().integer().min(1).required(),
})

export const validateSales_detail = (req, res, next) => {
    const {error} = createSchema.validate(req.body);
    if(error){
        return res.status(400).json({error: error.message})
    }

    next()

}