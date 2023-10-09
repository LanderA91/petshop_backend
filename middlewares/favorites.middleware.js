import Joi from "joi"

const createSchema = Joi.object({
    id_classes: Joi.number().integer().min(1).required()
})

export const validateFavorites = (req, res, next) => {
    const {error} = createSchema.validate(req.body);
    if(error){
        return res.status(400).json({error: error.message})
    }

    next()

}