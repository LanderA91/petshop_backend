import Joi from "joi"

const createSchema = Joi.object({
    id : Joi.number().integer().min(1).required()
})

export const validateId = (req, res, next) => {
    const {error} = createSchema.validate(req.params);
    if(error){
        return res.status(400).json({error: error.message})
    }

    next()

}