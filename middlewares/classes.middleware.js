import Joi from "joi"

const createSchema = Joi.object({
    subject: Joi.string().trim().min(3).max(20).required(),
    name: Joi.string().trim().min(3).max(50).required(),
    description: Joi.string().trim().min(3).max(150).required(),
    level: Joi.string().trim().min(3).max(30).required(),
    schedule: Joi.string().trim().min(3).max(20).required(),
    price: Joi.number().integer().min(1).required(),
    img: Joi.string().trim().min(3).max(200).required(),
})

export const validateClasses = (req, res, next) => {
    const { error } = createSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.message })
    }

    next()

}