const Joi = require("joi");
const today = new Date();
const yearToday = today.getFullYear();


const id = Joi.number();
const name = Joi.string().min(3).max(50);
const year = Joi.number().integer().min(1900).max(yearToday);
const watched = Joi.boolean();
const rating = Joi.number();
const duration = Joi.number().integer().min(20).max(240);
const description = Joi.string();



const createMovieSchema = Joi.object({
  name: name.required(),
  year: year.required(),
  watched: watched.required(),
  rating: rating.required(),
  duration: duration.required(),
  description: description.required(),
})

const updateMovieSchema = Joi.object({
  name: name,
  year: year,
  watched: watched,
  rating: rating,
  duration: duration,
  description: description
})

const getMovieSchema = Joi.object({
  id: id.required()
})



module.exports = {createMovieSchema, updateMovieSchema,getMovieSchema}
