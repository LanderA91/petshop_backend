import Joi from "joi"

const createSchema = Joi.object({
    email    : Joi.string().max(50).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'cl', 'live', 'es'] } }).required(),
    password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    
})

export const validateLogin = (req, res, next) => {
    const {error} = createSchema.validate(req.body);
    if(error){
        return res.status(400).json({error: error.message})
    }

    next()
}