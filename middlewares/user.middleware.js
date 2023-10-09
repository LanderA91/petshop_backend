import Joi from "joi"

const createSchema = Joi.object({
    name       : Joi.string().trim().min(3).max(20).required(),
    lastName   : Joi.string().trim().min(3).max(20).required(),
    email      : Joi.string().max(50).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'cl', 'live', 'es'] } }),
    password   : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    img_avatar : Joi.string().trim().max(200),
})

export const validateUser = (req, res, next) => {
    const {error} = createSchema.validate(req.body);
    if(error){
        return res.status(400).json({error: error.message})
    }

    next()
}