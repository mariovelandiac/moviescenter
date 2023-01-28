const Joi = require("joi");


const id = Joi.string().uuid();
const name = Joi.string().min(3).max(50);
const description = Joi.string();


const createProducerSchema = Joi.object({
  name: name.required(),
  description: description.required()
})

const updateProducerSchema = Joi.object({
  name: name,
  description: description
})

const getProducerSchema = Joi.object({
  id: id.required()
})



module.exports = {createProducerSchema, updateProducerSchema,getProducerSchema}
