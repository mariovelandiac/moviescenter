const Joi = require("joi");
const today = new Date();
const yearToday = today.getFullYear();

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(50);
const gender = Joi.string();
const age = Joi.number().min(1900).max(yearToday);
const isBlock = Joi.boolean();


const createActorSchema = Joi.object({
  name: name.required(),
  gender: gender.required(),
  age: age.required(),
  isBlock: isBlock.required()
})

const updateActorSchema = Joi.object({
  name: name,
  gender: gender,
  age: age
})

const getActorSchema = Joi.object({
  id: id.required()
})



module.exports = {createActorSchema, updateActorSchema,getActorSchema}
