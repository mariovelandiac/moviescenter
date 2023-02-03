const Joi = require("joi");


const id = Joi.number();
const calification = Joi.number().integer().min(0).max(5);
const comment = Joi.string();



const createCommentSchema = Joi.object({
  calification: calification.required(),
  comment: comment.required(),
})

const updateCommentSchema = Joi.object({
  calification: calification,
  comment: comment,
})

const getCommentSchema = Joi.object({
  id: id.required()
})



module.exports = {createCommentSchema, updateCommentSchema,getCommentSchema}
