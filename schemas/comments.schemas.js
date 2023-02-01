const Joi = require("joi");


const id = Joi.number();
const comment = Joi.string();



const createCommentSchema = Joi.object({
  comment: comment.required(),
})

const updateCommentSchema = Joi.object({
  comment: comment,
})

const getCommentSchema = Joi.object({
  id: id.required()
})



module.exports = {createCommentSchema, updateCommentSchema,getCommentSchema}
