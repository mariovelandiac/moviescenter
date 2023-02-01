const Joi = require("joi");


const id = Joi.number();
const name = Joi.string().min(3).max(50);


const createActorSchema = Joi.object({
  name: name.required(),
})

const updateActorSchema = Joi.object({
  name: name,
})

const getActorSchema = Joi.object({
  id: id.required()
})



module.exports = {createActorSchema, updateActorSchema,getActorSchema}
